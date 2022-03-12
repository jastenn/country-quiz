import React, { FC } from "react"

interface QuizChoiceItemProps {
  tag: string
  status: "initial" | "incorrect" | "correct"
  onClick: () => void
  disabled?: boolean
}
const btnClass = {
  initial:
    "ring-2 ring-purple text-purple hover:bg-mustard hover:disabled:bg-transparent hover:text-white hover:disabled:text-purple hover:ring-mustard ring-inset hover:disabled:ring-purple",
  incorrect: "bg-red-400 text-white",
  correct: "bg-emerald-400 text-white",
}
const QuizChoiceItem: FC<QuizChoiceItemProps> = ({
  onClick,
  tag,
  status,
  disabled = false,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${btnClass[status]} font-medium rounded-lg flex items-center justify-between w-full px-4 py-2`}
    >
      <span className="text-xl uppercase sm:text-2xl">{tag}</span>{" "}
      <span className="w-full ml-6 text-base text-left sm:ml-12 sm:text-lg">
        {children}
      </span>
      {status === "correct" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 h-8 w-"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      {status === "incorrect" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </button>
  )
}

export default QuizChoiceItem
