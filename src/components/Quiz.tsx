import { FC } from "react"
import { QueryStatus } from "react-query"
import { Question } from "../types"

import QuizResult from "./QuizResult"
import QuizQuestion from "./QuizQuestion"
import Spinner from "./Spinner/Spinner"

interface QuizProps {
  currentItem: number
  totalQuestions: number
  score: number
  question?: Question
  status: QueryStatus
  onAnswer: (answer: string) => void
  onReset: () => void
  onNext: () => void
}

const Quiz: FC<QuizProps> = ({
  totalQuestions,
  currentItem,
  score,
  status,
  question,
  onReset,
  onAnswer,
  onNext,
}) => {
  return (
    <div className="py-8 bg-white rounded-3xl">
      {currentItem === totalQuestions && score !== undefined ? (
        <QuizResult
          totalQuestions={totalQuestions}
          score={score}
          onReset={onReset}
        />
      ) : (
        <>
          {(status === "idle" || status === "loading") && (
            <>
              <h2 className="mb-8 font-sans text-xl font-bold text-center sm:text-2xl">
                We are preparing your quiz.
              </h2>
              <Spinner />
            </>
          )}

          {status === "error" && (
            <h2 className="mb-8 font-sans text-xl font-bold text-center sm:text-2xl">
              Something went wrong
            </h2>
          )}

          {status === "success" && question && (
            <QuizQuestion
              question={question}
              onAnswer={onAnswer}
              onNext={onNext}
            />
          )}
        </>
      )}
    </div>
  )
}

export default Quiz
