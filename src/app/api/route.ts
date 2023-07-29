import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    basicData: `This page is revalidated last time at ${new Date()
      .toISOString()
      .replace(/[TZ.]/g, " ")}`,
  });
}
