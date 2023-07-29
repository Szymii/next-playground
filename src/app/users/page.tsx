import { Container, HStack, VStack } from "panda/jsx";

import { RemoveButton } from "./RemoveButton";
import { getUsers } from "./actions";

export default async function Page() {
  const data = await getUsers();

  return (
    <main>
      <Container p={8} maxW="3xl" mt={6}>
        <VStack>
          {data.map((user, i) => {
            return (
              <HStack
                key={user.id}
                p={4}
                w="100%"
                justifyContent={"space-between"}
              >
                <span>
                  {i + 1}. {user.name} - ({user.alias})
                </span>
                <RemoveButton id={user.id} />
              </HStack>
            );
          })}
        </VStack>
      </Container>
    </main>
  );
}
