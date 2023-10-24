// import styles from "./WelcomText.module.css"

export interface IWelcomTextProps {
  isTimerActive: boolean
}

const WelcomText: React.FC<IWelcomTextProps> = (props) => {
  const { isTimerActive } = props
  if (isTimerActive) {
    return <span>Loading...</span>
  }
  return (
    <span>
      Press "Play" to start the game and wait for the first arrow to appear
    </span>
  )
}

export default WelcomText
