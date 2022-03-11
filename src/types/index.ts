interface Choices {
  a: string
  b: string
  c: string
  d: string
}

export interface Question {
  question: string
  choices: Choices
  answer: string
  image?: string
}
