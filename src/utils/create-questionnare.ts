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

type fetchQuestionnaire = () => Promise<Question[]>

export default function createQuestionnaire(
  countryNames: string[]
): fetchQuestionnaire {
  return () => {
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
}
