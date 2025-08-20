import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buffet CRM - Sistema de Gestão para Buffet In House",
  description: "Sistema completo de CRM para gerenciamento de buffet in house, incluindo leads, propostas, eventos, produção e financeiro.",
  keywords: ["Buffet CRM", "Gestão de Buffet", "CRM para Eventos", "Sistema de Buffet", "Eventos Corporativos"],
  authors: [{ name: "Buffet CRM Team" }],
  openGraph: {
    title: "Buffet CRM - Sistema de Gestão para Buffet In House",
    description: "Sistema completo de CRM para gerenciamento de buffet in house",
    url: "https://buffet-crm.com",
    siteName: "Buffet CRM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buffet CRM - Sistema de Gestão para Buffet In House",
    description: "Sistema completo de CRM para gerenciamento de buffet in house",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
