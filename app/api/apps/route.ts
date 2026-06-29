import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const apps = await prisma.app.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(apps);
}