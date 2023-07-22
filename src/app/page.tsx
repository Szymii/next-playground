import fs from "fs/promises";
import { redirect } from "next/navigation";
import { Container, VStack, styled } from "panda/jsx";
import { TextField } from "src/components/TextField";
import { Button } from "src/recipes/button";

export default function Home() {
  async function saveData(data: FormData) {
    "use server";

    const content = {
      name: data.get("name"),
      alias: data.get("alias"),
    };

    try {
      await fs.writeFile(
        "/Users/Szymi/Desktop/Pro/server-playground/db.txt",
        `${JSON.stringify(content)}\n`,
        { flag: "a+" },
      );
    } catch (e) {
      console.log(e);
      return;
    }

    // redirect doesn't work in try catch 🧻
    redirect("/users");
  }

  return (
    <styled.main>
      <Container p={8} maxW="3xl" mt={6}>
        <form action={saveData}>
          <VStack gap={6}>
            <TextField label="Name" name="name" />
            <TextField label="Alias" name="alias" />
            <Button variant="ghost" w="md" type="submit">
              Save in DB
            </Button>
          </VStack>
        </form>
      </Container>
    </styled.main>
  );
}
