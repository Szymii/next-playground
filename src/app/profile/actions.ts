"use server";

export async function getUser(name: string) {
  const res = await fetch(`${process.env.API_URL}/${name}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
