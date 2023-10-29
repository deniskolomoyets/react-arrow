// import styles from "./WelcomText.module.css"

import { TypographyText } from "../../../../../UI"

export interface IWelcomTextProps {
  isTimerActive: boolean
}

const WelcomText: React.FC<IWelcomTextProps> = (props) => {
  const { isTimerActive } = props
  if (isTimerActive) {
    return <span>Loading...</span>
  }
  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelcomText
