import fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { name: string } },
) {
  const name = params.name;

  const rowData = await fs.readFile(`${process.env.DB_PATH}/db.txt`, {
    encoding: "utf-8",
  });

  const rows = rowData.split("\n");
  const nonEmptyRows = rows.filter((row) => row.trim() !== "");

  const arrayOfObjects = nonEmptyRows.map((row) => JSON.parse(row));

  const user = arrayOfObjects.find((user) => user.name === name);

  if (!user) {
    throw new Error("User do not exist");
  }

  return NextResponse.json({ user });
}

export async function POST(request: Request) {
  console.log(request);
  //
}

export async function DELETE(request: Request) {
  console.log(request);
  //
}
