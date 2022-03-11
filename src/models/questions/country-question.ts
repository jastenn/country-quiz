import { Question } from "../../types"
import random from "../../utils/random"
import shuffle from "../../utils/shuffle"

export abstract class CountryQuestion {
  protected curCountry: string
  answer: string | undefined
  choices: string[]

  constructor(countryNames: string[]) {
    this.curCountry = random(countryNames)[0]

    const moreChoices = random(countryNames, 3, [this.curCountry])
    this.choices = shuffle([...moreChoices, this.curCountry])
  }

  abstract generate(): Promise<Question>
  abstract isCorrect(answer: string): Boolean
}
