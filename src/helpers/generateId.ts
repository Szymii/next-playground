export function generateId() {
  // Pobierz aktualny czas w milisekundach
  const timestamp = new Date().getTime();

  // Generuj losową liczbę jako składnik ID
  const randomPart = Math.floor(Math.random() * 10000);

  // Sklej czas i losową liczbę, aby uzyskać unikatowe ID
  const uniqueID = `${timestamp}-${randomPart}`;

  return uniqueID;
}
