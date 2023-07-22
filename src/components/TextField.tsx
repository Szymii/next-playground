import { VStack } from "panda/jsx";
import { Input } from "src/recipes/input";

interface IProps {
  label: string;
  name: string;
}

export const TextField = ({ label, name }: IProps) => {
  return (
    <label>
      <VStack alignItems={"start"} gap={2}>
        <span>{label}</span>
        <Input type="text" variant="outline" minW={"md"} name={name} />
      </VStack>
    </label>
  );
};
