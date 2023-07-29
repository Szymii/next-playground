import { Container, styled } from "panda/jsx";
import { Footer } from "src/components/Footer";
import { UserData } from "src/components/UserData";

import { getUser } from "./actions";

export default function Page() {
  return (
    <styled.main>
      <Container p={8} maxW="3xl" mt={6}>
        <UserData search={getUser} />
        <Footer />
      </Container>
    </styled.main>
  );
}
