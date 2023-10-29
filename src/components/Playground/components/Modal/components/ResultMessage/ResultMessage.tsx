// import styles from "./ResultMessage.module.css"

import { TypographyText } from "../../../../../UI"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <TypographyText>
      Congratulations! <br /> You win!
    </TypographyText>
  ) : (
    <TypographyText>
      You lose. <br /> Try Again
    </TypographyText>
  )
}

export default ResultMessage
