import { styled } from "panda/jsx";

export async function getData(): Promise<{ basicData: string }> {
  const res = await fetch(`${process.env.API_URL}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function Footer() {
  const data = await getData();

  return <styled.div mt={8}>{data.basicData}</styled.div>;
}
