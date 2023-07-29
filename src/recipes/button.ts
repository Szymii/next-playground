import { cva } from "panda/css";
import { styled } from "panda/jsx";

const butonStyles = cva({
  base: {
    py: 2,
    px: 4,
    fontSize: "md",
    fontWeight: "semibold",
    cursor: "pointer",
  },
  variants: {
    variant: {
      solid: {
        bg: "gray.800",
        color: "gray.50",
        transition: "all 0.3s",
        _hover: {
          bg: "gray.700",
        },
        _disabled: {
          bg: "gray.700",
          cursor: "not-allowed",
        },
      },
      ghost: {
        bg: "transparent",
        color: "gray.50",
        borderRadius: "md",
        transition: "all 0.3s",
        _hover: {
          bg: "gray.800",
        },
        _disabled: {
          bg: "gray.800",
          cursor: "not-allowed",
        },
      },
    },
  },
});

export const Button = styled("button", butonStyles);
