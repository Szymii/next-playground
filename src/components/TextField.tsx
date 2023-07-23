import { VStack } from "panda/jsx";
import { Input } from "src/recipes/input";

interface IProps {
  label: string;
  name: string;
  required?: boolean;
}

export const TextField = ({ label, name, required }: IProps) => {
  return (
    <label>
      <VStack alignItems={"start"} gap={2}>
        <span>{label}</span>
        <Input type="text" variant="outline" minW={"md"} name={name} required />
      </VStack>
    </label>
  );
};
