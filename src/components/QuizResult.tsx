import React, { FC } from "react"
import ImageTrophy from "../assets/images/undraw_winners_ao2o 2.svg"

interface QuizResultProps {
  totalQuestions: number
  score: number
  onReset: () => void
}
const QuizResult: FC<QuizResultProps> = ({
  totalQuestions,
  score,
  onReset,
}) => {
  return (
    <div className="text-center">
      <img
        className="block w-4/6 mx-auto mb-20"
        src={ImageTrophy}
        alt="Trophy"
      />
      <h2 className="text-4xl font-bold sm:text-5xl">Results</h2>
      <p className="mb-8 text-base sm:text-xl">
        You got{" "}
        <strong
          className={`text-2xl sm:text-3xl font-bold ${
            totalQuestions * 0.7 > score ? "text-red-500" : "text-emerald-400"
          }`}
        >
          {score}
        </strong>{" "}
        correct {score <= 1 ? "answer" : "answers"}
      </p>
      <button
        onClick={onReset}
        className="py-3 text-base font-semibold sm:py-4 sm:text-lg ring-2 ring-dark-neutral px-14 rounded-xl"
      >
        Try Again
      </button>
    </div>
  )
}

export default QuizResult
