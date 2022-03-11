import { Question } from "../types"
import {
  CapitalQuestion,
  FlagQuestion,
  ContinentQuestion,
  SubregionQuestion,
} from "../models/questions"

const questionnaireGenerators = [
  CapitalQuestion,
  FlagQuestion,
  ContinentQuestion,
  SubregionQuestion,
]

export default async function createQuestionnaire(
  countryNames: string[]
): Promise<Question[]> {
  const questionnaire: Promise<Question>[] = []

  while (questionnaire.length < 10) {
    const curGenerator =
      questionnaireGenerators[
        Math.floor(Math.random() * questionnaireGenerators.length)
      ]

    questionnaire.push(new curGenerator(countryNames).generate())
  }

  return Promise.all(questionnaire)
}
