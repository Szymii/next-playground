import { cva } from "panda/css";
import { styled } from "panda/jsx";

const inputStyles = cva({
  base: {
    px: 4,
    py: 2,
    fontSize: "md",
    fontWeight: "semibold",
  },
  variants: {
    variant: {
      outline: {
        bg: "transparent",
        color: "gray.50",
        outline: "solid",
        outlineColor: "gray.700",
        borderRadius: "md",
      },
    },
  },
});

export const Input = styled("input", inputStyles);
