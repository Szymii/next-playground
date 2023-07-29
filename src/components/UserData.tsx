"use client";

import { HStack, VStack, styled } from "panda/jsx";
import { useState, useTransition } from "react";
import { Button } from "src/recipes/button";
import { Input } from "src/recipes/input";

type User = {
  id: string;
  name: string;
  alias: string;
};

interface IProps {
  // eslint-disable-next-line no-unused-vars
  search: (name: string) => Promise<{ user: User }>;
}

export const UserData = ({ search }: IProps) => {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("");
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      <HStack alignItems="flex-end">
        <label>
          <VStack alignItems="start" gap={2}>
            <span>User name</span>
            <Input
              type="text"
              variant="outline"
              minW={"md"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </VStack>
        </label>
        <Button
          variant="solid"
          borderRadius="md"
          onClick={() =>
            startTransition(async () => {
              try {
                const result = await search(value);
                setUser(result.user);
              } catch {
                throw new Error("Wrong user name");
              }
            })
          }
          disabled={isPending}
        >
          Get
        </Button>
      </HStack>
      <styled.ul mt={6}>
        {user && (
          <>
            <li>ID: {user.id}</li>
            <li>Name: {user.name}</li>
            <li>Alias: {user.alias}</li>
          </>
        )}
      </styled.ul>
    </div>
  );
};
