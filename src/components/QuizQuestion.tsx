import React, { FC } from "react"
import { Question } from "../types"

import AdventureIllustration from "../assets/images/undraw_adventure_4hum 1.svg"

import QuizChoices from "./QuizChoices"

interface QuizQuestionProps {
  question: Question
  onAnswer: (answer: string) => void
  onNext: () => void
}
const QuizQuestion: FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  onNext,
}) => {
  return (
    <div className="relative">
      <img
        className="absolute right-0 origin-bottom-right scale-90 sm:scale-100 bottom-full"
        src={AdventureIllustration}
        alt=""
      />
      <div className="px-8 pt-6">
        {question.image && (
          <img
            className="rounded shadow-md mb-7 h-14"
            src={question.image}
            alt=""
          />
        )}
        <h2 className="mb-8 font-sans text-xl font-bold sm:text-2xl">
          {question.question}
        </h2>
        <QuizChoices question={question} onAnswer={onAnswer} />
        {question.answered && (
          <button
            className="block px-6 py-2 ml-auto text-lg font-bold text-white transition-opacity shadow sm:text-xl sm:py-2 sm:px-9 focus:outline-none focus:opacity-75 hover:opacity-75 w-min rounded-xl bg-amber-500"
            onClick={onNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default QuizQuestion
