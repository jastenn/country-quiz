import { Question } from "../../types"
import getCountry from "../../utils/get-country"
import random from "../../utils/random"
import shuffle from "../../utils/shuffle"
import { CountryQuestion } from "./country-question"

export class SubregionQuestion extends CountryQuestion {
  subregions = [
    "Northern Europe",
    "South America",
    "Micronesia",
    "Western Africa",
    "Western Asia",
    "Caribbean",
    "Southeast Europe",
    "Eastern Africa",
    "Southern Africa",
    "Middle Africa",
    "Polynesia",
    "Southern Europe",
    "North America",
    "Melanesia",
    "Eastern Asia",
    "Eastern Europe",
    "Southern Asia",
    "South-Eastern Asia",
    "Central America",
    "Central Europe",
    "Western Europe",
    "Central Asia",
    "Australia and New Zealand",
    "Northern Africa",
  ]
  async generate(): Promise<Question> {
    const countryDetails = await getCountry(this.curCountry)

    const filler = random(this.subregions, 3, [countryDetails.subregion])
    this.choices = shuffle([...filler, countryDetails.subregion])
    this.answer = countryDetails.subregion

    return {
      question: `On which subregion does ${this.curCountry} belongs?`,
      choices: {
        a: this.choices[0],
        b: this.choices[1],
        c: this.choices[2],
        d: this.choices[3],
      },
      answer: this.answer,
    }
  }

  isCorrect(answer: string): Boolean {
    return this.answer === answer
  }
}
