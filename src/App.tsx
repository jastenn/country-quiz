import { useEffect, useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import Quiz from "./components/Quiz"
import type { Question } from "./types"
import createQuestionnaire from "./utils/create-questionnare"

const fetchCountryNames = async () => {
  const res = await fetch(
    "https://restcountries.com/v3/all?fields=name,capital,currencies,flags"
  )

  const data: any = await res.json()

  return data.map((item: any) => item.name.common)
}

/**
 * TODO: Persist to local storage the state
 */

function App() {
  const queryClient = useQueryClient()
  const { data: countryNames } = useQuery("country-names", fetchCountryNames)
  const { data: questionnaire, status: questionnaireStatus } = useQuery(
    "questions",
    createQuestionnaire(countryNames),
    {
      enabled: !!countryNames,
    }
  )
  const [score, setScore] = useState(0)
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<Question>()

  useEffect(() => {
    console.log("this ran")
    if (questionnaire) setCurrentQuestion(questionnaire[currentQuestionIdx])
  }, [questionnaire, currentQuestionIdx])
  useEffect(() => {
    console.log(currentQuestionIdx)
  }, [currentQuestionIdx])

  const handleAnswer = (answer: string) => {
    console.log("click")
    if (!currentQuestion) return

    if (answer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }

    setCurrentQuestion((prevState) => {
      if (prevState === undefined) return prevState

      return {
        ...prevState,
        answered: true,
        selectedAnswer: answer,
      }
    })
  }

  const handleNext = () => {
    setCurrentQuestionIdx((prevState) => prevState + 1)
    console.log("next")
  }

  const resetQuiz = () => {
    setCurrentQuestionIdx(0)
    setCurrentQuestion(undefined)
    setScore(0)
    queryClient.resetQueries("questions")
  }

  return (
    <main className="flex items-center justify-center h-screen bg-center bg-cover bg-pattern text-dark-neutral">
      <div className="max-w-[29rem] mx-auto w-[88%]">
        <h1 className="mb-2 text-2xl font-bold text-white sm:text-4xl">
          Country Quiz
        </h1>
        <Quiz
          currentItem={currentQuestionIdx + 1}
          totalQuestions={10}
          score={score}
          onNext={handleNext}
          onAnswer={handleAnswer}
          onReset={resetQuiz}
          question={currentQuestion}
          status={questionnaireStatus}
        />
      </div>
    </main>
  )
}

export default App
