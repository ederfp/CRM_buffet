import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "all";

    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};
    
    if (search) {
      where.OR = [
        { customer: { name: { contains: search, mode: "insensitive" } } },
        { customer: { email: { contains: search, mode: "insensitive" } } },
        { notes: { contains: search, mode: "insensitive" } },
      ];
    }

    if (status !== "all") {
      where.status = status;
    }

    const [leads, total] = await Promise.all([
      db.lead.findMany({
        where,
        include: {
          customer: true,
          assignedTo: {
            select: { id: true, name: true, email: true }
          },
          opportunity: {
            select: { id: true, valueExpected: true, probability: true }
          }
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" }
      }),
      db.lead.count({ where })
    ]);

    return NextResponse.json({
      success: true,
      data: leads,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
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
      customerId,
      source,
      tags,
      status,
      assignedToId,
      notes
    } = body;

    // Validate required fields
    if (!customerId) {
      return NextResponse.json(
        { success: false, error: "Customer ID is required" },
        { status: 400 }
      );
    }

    // Check if customer exists
    const customer = await db.customer.findUnique({
      where: { id: customerId }
    });

    if (!customer) {
      return NextResponse.json(
        { success: false, error: "Customer not found" },
        { status: 404 }
      );
    }

    // Create lead
    const lead = await db.lead.create({
      data: {
        companyId: customer.companyId,
        customerId,
        source: source || null,
        tags: tags ? JSON.stringify(tags) : null,
        status: status || "NEW",
        assignedToId: assignedToId || null,
        notes: notes || null
      },
      include: {
        customer: true,
        assignedTo: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    // Log activity
    await db.activityLog.create({
      data: {
        companyId: customer.companyId,
        type: "system",
        message: `Novo lead criado: ${customer.name}`,
        meta: { leadId: lead.id, action: "created" }
      }
    });

    return NextResponse.json({
      success: true,
      data: lead
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}