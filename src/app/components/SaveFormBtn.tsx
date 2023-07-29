"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "src/recipes/button";

interface IProps {
  label: string;
}

export const SaveFormBtn = ({ label }: IProps) => {
  const { pending } = useFormStatus();

  return (
    <Button variant="ghost" w="md" type="submit" disabled={pending}>
      {pending ? "Loading..." : label}
    </Button>
  );
};
