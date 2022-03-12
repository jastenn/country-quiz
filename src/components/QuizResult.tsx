import React, { FC } from "react"
import ImageTrophy from "../assets/images/undraw_winners_ao2o 2.svg"
import ImageFailed from "../assets/images/undraw_feeling_blue_-4-b7q.svg"

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
  const isFailed = totalQuestions * 0.7 > score

  return (
    <div className="text-center">
      <img
        className="block w-4/6 mx-auto mb-20"
        src={isFailed ? ImageFailed : ImageTrophy}
        alt="Trophy"
      />
      <h2 className="text-4xl font-bold sm:text-5xl">Results</h2>
      <p className="mb-8 text-base sm:text-xl">
        You got{" "}
        <strong
          className={`text-2xl sm:text-3xl font-bold ${
            isFailed ? "text-red-500" : "text-emerald-400"
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
