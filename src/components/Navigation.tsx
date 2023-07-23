"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, HStack, styled } from "panda/jsx";
import { useTransition } from "react";

export const Navigation = () => {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <Container p={8} maxW="3xl">
      <HStack justifyContent={"flex-end"} w="100%">
        <Link href={"/"}>
          <styled.span
            textDecoration={pathname === "/" ? "underline" : undefined}
            _hover={{ textDecoration: "underline" }}
          >
            Form
          </styled.span>
        </Link>
        <Link href={"/users"}>
          <styled.span
            textDecoration={pathname === "/users" ? "underline" : undefined}
            _hover={{ textDecoration: "underline" }}
          >
            Users
          </styled.span>
        </Link>
        <Link href={"/profile"}>
          <styled.span
            textDecoration={pathname === "/profile" ? "underline" : undefined}
            _hover={{ textDecoration: "underline" }}
          >
            Profile
          </styled.span>
        </Link>
      </HStack>
    </Container>
  );
};
