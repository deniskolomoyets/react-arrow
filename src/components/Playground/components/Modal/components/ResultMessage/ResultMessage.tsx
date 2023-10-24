// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <span>
      Congratulations! <br /> You win!
    </span>
  ) : (
    <span>
      You lose. <br /> Try Again
    </span>
  )
}

export default ResultMessage
