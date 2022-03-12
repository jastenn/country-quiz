import React, { FC } from "react"
import { Question } from "../types"
import QuizChoiceItem from "./QuizChoiceItem"

interface QuizChoicesProps {
  question: Question
  onAnswer: (answer: string) => void
}

const getChoiceItemVariant = (values: {
  choiceValue: string
  answered: boolean | undefined
  correctAnswer: string
  selectedAnswer: string | undefined
}): "initial" | "incorrect" | "correct" => {
  if (!values.answered) return "initial"

  if (values.choiceValue === values.correctAnswer) {
    return "correct"
  }

  // Check if it needs incorrect variant
  if (values.correctAnswer !== values.selectedAnswer) {
    if (values.choiceValue === values.selectedAnswer) {
      return "incorrect"
    }
  }

  // TODO: variant for initial
  return "initial"
}

const QuizChoices: FC<QuizChoicesProps> = ({
  question: { choices, answered, correctAnswer, selectedAnswer },
  onAnswer,
}) => {
  return (
    <div className="flex flex-col gap-6 mb-9">
      {Object.entries(choices).map(([key, value]) => (
        <QuizChoiceItem
          key={key}
          disabled={!!answered}
          onClick={() => {
            onAnswer(value)
          }}
          status={getChoiceItemVariant({
            choiceValue: value,
            answered,
            correctAnswer,
            selectedAnswer,
          })}
          tag={key}
        >
          {value}
        </QuizChoiceItem>
      ))}
    </div>
  )
}

export default QuizChoices
