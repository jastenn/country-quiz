import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import type { Question } from "./types"
import createQuestionnaire from "./utils/create-questionnare"

const fetchCountryNames = async () => {
  const res = await fetch(
    "https://restcountries.com/v3/all?fields=name,capital,currencies,flags"
  )

  const data: any = await res.json()

  return data.map((item: any) => item.name.common)
}

function App() {
  const { data: countryNames } = useQuery("country-names", fetchCountryNames)
  const { data: questionnare, status: questionnareStatus } = useQuery(
    "questions",
    createQuestionnaire(countryNames),
    {
      enabled: !!countryNames,
    }
  )

  useEffect(() => {
    console.log(!countryNames)
  }, [countryNames])
  return <div className="bg-red-500 font-normal">Still Works</div>
}

export default App
