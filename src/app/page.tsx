"use client";

import { Container, VStack, styled } from "panda/jsx";
import { useRef } from "react";
import { TextField } from "src/components/TextField";
import { Button } from "src/recipes/button";

import { saveData } from "./saveAction";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <styled.main>
      <Container p={8} maxW="3xl" mt={6}>
        <form
          action={async (data) => {
            try {
              await saveData(data);
              formRef.current?.reset();
            } catch {
              //
            }
          }}
          ref={formRef}
        >
          <VStack gap={6}>
            <TextField label="Name" name="name" required />
            <TextField label="Alias" name="alias" required />
            <Button variant="ghost" w="md" type="submit">
              Save in DB
            </Button>
          </VStack>
        </form>
      </Container>
    </styled.main>
  );
}
