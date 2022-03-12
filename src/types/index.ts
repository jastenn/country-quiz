export interface Choices {
  a: string
  b: string
  c: string
  d: string
}

export interface Question {
  question: string
  choices: Choices
  image?: string
  answered?: boolean
  correctAnswer: string
  selectedAnswer?: string
}

export interface Country {
  flags: {
    png: string
    svg: string
  }
  name: {
    common: string
    official: string
    nativeName: any
  }
  capital: [string]
  region: string
  subregion: string
}
