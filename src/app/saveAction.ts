"use server";

import fs from "fs/promises";
import { generateId } from "src/helpers/generateId";

export async function saveData(data: FormData) {
  const content = {
    id: generateId(),
    name: data.get("name"),
    alias: data.get("alias"),
  };

  await fs.writeFile(
    `${process.env.DB_PATH}/db.txt`,
    `${JSON.stringify(content)}\n`,
    { flag: "a+" },
  );
}
