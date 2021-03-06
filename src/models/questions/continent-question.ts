import { Question } from "../../types"
import getCountry from "../../utils/get-country"
import random from "../../utils/random"
import shuffle from "../../utils/shuffle"
import { CountryQuestion } from "./country-question"

export class ContinentQuestion extends CountryQuestion {
  continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  async generate(): Promise<Question> {
    const countryDetails = await getCountry(this.curCountry)

    const filler = random(this.continents, 3, [countryDetails.region])
    this.choices = shuffle([...filler, countryDetails.region])
    this.answer = countryDetails.region

    return {
      question: `On which continent does ${this.curCountry} belongs?`,
      choices: {
        a: this.choices[0],
        b: this.choices[1],
        c: this.choices[2],
        d: this.choices[3],
      },
      correctAnswer: this.answer,
    }
  }

  isCorrect(answer: string): Boolean {
    return this.answer === answer
  }
}
