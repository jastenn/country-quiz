interface Country {
  flags: [string, string]
  name: {
    common: string
    official: string
    nativeName: any
  }
  capital: [string]
  region: string
  subregion: string
}
export default async function getCountry(
  countryName: string
): Promise<Country> {
  const res = await fetch(`https://restcountries.com/v3.1/${countryName}`)
  const data = await res.json()
  return data[0] as Country
}
