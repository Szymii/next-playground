"use server";

import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { delay } from "src/helpers/delay";

type Users = {
  id: string;
  name: string;
  alias: string;
};

export async function removeUser(id: string) {
  try {
    const rowData = await fs.readFile(`${process.env.DB_PATH}/db.txt`, {
      encoding: "utf-8",
    });

    const rows = rowData.split("\n");
    const nonEmptyRows = rows.filter((row) => row.trim() !== "");

    const arrayOfObjects: Users[] = nonEmptyRows.map((row) => JSON.parse(row));
    const lineToDelete = arrayOfObjects.findIndex((user) => user.id === id);

    // @ts-ignore toSpliced exists on node 20 - don't know why typescript cant see it
    const updatedLines: string[] = rows.toSpliced(lineToDelete, 1);
    const updatedFileData = updatedLines.join("\n");

    await fs.writeFile(`${process.env.DB_PATH}/db.txt`, updatedFileData);
    await delay(2000);
    revalidatePath("/users");
  } catch (error) {
    console.error("Wystąpił błąd podczas usuwania linii:", error);
  }
}

export async function getUsers(): Promise<Users[]> {
  const rowData = await fs.readFile(`${process.env.DB_PATH}/db.txt`, {
    encoding: "utf-8",
  });

  const rows = rowData.split("\n");
  const nonEmptyRows = rows.filter((row) => row.trim() !== "");

  const arrayOfObjects = nonEmptyRows.map((row) => JSON.parse(row));

  return arrayOfObjects;
}
