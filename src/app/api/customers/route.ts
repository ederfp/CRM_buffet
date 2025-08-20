import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { document: { contains: search, mode: "insensitive" } },
      ];
    }

    const [customers, total] = await Promise.all([
      db.customer.findMany({
        where,
        include: {
          contacts: true,
          _count: {
            select: {
              leads: true,
              opportunities: true,
              events: true
            }
          }
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" }
      }),
      db.customer.count({ where })
    ]);

    return NextResponse.json({
      success: true,
      data: customers,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      companyId,
      type,
      name,
      email,
      phone,
      document,
      address,
      customFields,
      consentAt
    } = body;

    // Validate required fields
    if (!companyId || !type || !name) {
      return NextResponse.json(
        { success: false, error: "Company ID, type, and name are required" },
        { status: 400 }
      );
    }

    // Check if company exists
    const company = await db.company.findUnique({
      where: { id: companyId }
    });

    if (!company) {
      return NextResponse.json(
        { success: false, error: "Company not found" },
        { status: 404 }
      );
    }

    // Check for duplicate customer
    const existingCustomer = await db.customer.findFirst({
      where: {
        companyId,
        OR: [
          { email: email || "" },
          { phone: phone || "" },
          { document: document || "" }
        ]
      }
    });

    if (existingCustomer) {
      return NextResponse.json(
        { success: false, error: "Customer with this email, phone, or document already exists" },
        { status: 409 }
      );
    }

    // Create customer
    const customer = await db.customer.create({
      data: {
        companyId,
        type,
        name,
        email: email || null,
        phone: phone || null,
        document: document || null,
        address: address || null,
        customFields: customFields || null,
        consentAt: consentAt || null
      }
    });

    // Log activity
    await db.activityLog.create({
      data: {
        companyId,
        type: "system",
        message: `Novo cliente criado: ${name}`,
        meta: { customerId: customer.id, action: "created" }
      }
    });

    return NextResponse.json({
      success: true,
      data: customer
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}