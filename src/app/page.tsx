"use client";

import { useRouter } from "next/navigation";
import { Container, VStack, styled } from "panda/jsx";
import { useRef } from "react";
import { TextField } from "src/components/TextField";

import { saveData } from "./actions";
import { SaveFormBtn } from "src/components/SaveFormBtn";

export default function Home() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <styled.main>
      <Container p={8} maxW="3xl" mt={6}>
        <form
          action={async (data) => {
            try {
              await saveData(data);
              router.refresh();
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
            <SaveFormBtn label="Save in DB" />
          </VStack>
        </form>
      </Container>
    </styled.main>
  );
}
