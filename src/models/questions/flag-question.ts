import { Question } from "../../types"
import getCountry from "../../utils/get-country"
import { CountryQuestion } from "./country-question"

export class FlagQuestion extends CountryQuestion {
  async generate(): Promise<Question> {
    const countryDetails = await getCountry(this.curCountry)
    this.answer = this.curCountry

    return {
      question: `Which country does this belong to?`,
      image: countryDetails.flags.png,
      choices: {
        a: this.choices[0],
        b: this.choices[1],
        c: this.choices[2],
        d: this.choices[3],
      },
      correctAnswer: this.curCountry,
    }
  }

  isCorrect(answer: string): Boolean {
    return this.answer === answer
  }
}
