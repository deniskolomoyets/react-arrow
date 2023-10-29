import { TypographyText } from "../../../../../UI"
import stylesCommon from "../../RandomKeys.module.css"
import styles from "./WelcomText.module.css"
import loader from "./img/loader.svg"

export interface IWelcomTextProps {
  isTimerActive: boolean
}

const WelcomText: React.FC<IWelcomTextProps> = (props) => {
  const { isTimerActive } = props
  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="loader" />
        </span>
      </div>
    )
  }
  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelcomText
