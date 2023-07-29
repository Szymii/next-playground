"use client";

import { Container, styled } from "panda/jsx";
import { Button } from "src/recipes/button";

// Error components must be Client Components

export default function Error() {
  return (
    <styled.main>
      <Container p={8} maxW="3xl" mt={6} display="flex" justifyContent="center">
        <Button
          variant="solid"
          borderRadius="md"
          onClick={() => {
            window.location.reload();
          }}
        >
          Try again
        </Button>
      </Container>
    </styled.main>
  );
}
