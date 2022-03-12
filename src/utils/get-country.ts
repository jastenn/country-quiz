import { Country } from "../types"

export default async function getCountry(
  countryName: string
): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  const data = await res.json()
  return data[0] as Country
}
