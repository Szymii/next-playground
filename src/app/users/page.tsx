import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { Container, HStack, VStack } from "panda/jsx";

import { RemoveButton } from "./RemoveButton";

type Users = {
  id: string;
  name: string;
  alias: string;
};

async function getUsers(): Promise<Users[]> {
  const rowData = await fs.readFile(`${process.env.DB_PATH}/db.txt`, {
    encoding: "utf-8",
  });

  const rows = rowData.split("\n");
  const nonEmptyRows = rows.filter((row) => row.trim() !== "");

  const arrayOfObjects = nonEmptyRows.map((row) => JSON.parse(row));

  return arrayOfObjects;
}

export default async function Page() {
  const data = await getUsers();

  return (
    <main>
      <Container p={8} maxW="3xl" mt={6}>
        <VStack alignItems={"space"}>
          {data.map((user, i) => {
            return (
              <HStack
                key={user.id}
                p={4}
                w="100%"
                justifyContent={"space-between"}
              >
                <span>
                  {i + 1}. {user.name} - ({user.alias})
                </span>
                <RemoveButton id={user.id} />
              </HStack>
            );
          })}
        </VStack>
      </Container>
    </main>
  );
}
