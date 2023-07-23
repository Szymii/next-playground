"use client";

import { useTransition } from "react";
import { Button } from "src/recipes/button";

import { removeUser } from "./removeAction";

export const RemoveButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="solid"
      borderRadius="md"
      disabled={isPending}
      onClick={() => startTransition(() => removeUser(id))}
    >
      Remove
    </Button>
  );
};
