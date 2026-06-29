import { NextRequest, NextResponse } from "next/server";
import { generateAppSpec } from "@/services/generator.service";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const appSpec = await generateAppSpec(prompt);
    await prisma.app.create({
  data: {
    title: appSpec.title,
    prompt,
    appSpec,
  },
});

    return NextResponse.json({
      success: true,
      appSpec,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate application",
      },
      { status: 500 }
    );
  }
}