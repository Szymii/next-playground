import { cva } from "panda/css";
import { styled } from "panda/jsx";

const butonStyles = cva({
  base: {
    py: 2,
    px: 4,
    fontSize: "md",
    fontWeight: "semibold",
  },
  variants: {
    variant: {
      ghost: {
        bg: "transparent",
        color: "gray.50",
        borderRadius: "md",
        cursor: "pointer",
        transition: "all 0.3s",
        _hover: {
          bg: "gray.800",
        },
      },
    },
  },
});

export const Button = styled("button", butonStyles);
