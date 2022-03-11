import { useEffect, useState } from "react"
import type { Question } from "./types"

function App() {
  const [countries, setCountries] = useState<string[]>()
  useEffect(() => {
    ;(async (_) => {
      const res = await fetch(
        "https://restcountries.com/v3/all?fields=name,capital,currencies,flags"
      )

      const data: any = await res.json()

      setCountries(data.map((item: any) => item.name.common))
    })()
  }, [])
  return <div className="bg-red-500 font-normal">Still Works</div>
}

export default App
