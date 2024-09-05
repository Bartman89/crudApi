export async function helpFetch2() {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
