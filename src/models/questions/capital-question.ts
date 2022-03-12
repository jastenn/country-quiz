import { Question } from "../../types"
import getCountry from "../../utils/get-country"
import { CountryQuestion } from "./country-question"

export class CapitalQuestion extends CountryQuestion {
  async generate(): Promise<Question> {
    const countryDetails = await getCountry(this.curCountry)
    this.answer = this.curCountry

    return {
      question: `${countryDetails.capital[0]} is the capital of`,
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
