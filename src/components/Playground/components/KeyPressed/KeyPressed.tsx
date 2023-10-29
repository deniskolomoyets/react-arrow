import styles from "./KeyPressed.module.css"
import { useCallback, useEffect } from "react"

import { setEnteredValue } from "../../store/slices"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { useKeyPressedElement } from "./hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const dispatch = useAppDispatch()

  const keyPressedElement = useKeyPressedElement()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key)) //в качестве payload передаем значение клавиши, и будем диспатчить только при активном таймере
      }
    },
    [dispatch, isTimerActive],
  ) // фун-ия показывает нажатую клавишу. используем CallBack потому что при каждом рендере будет меняться ссылка на функцию, и когда мы его будем размонтировать в return, то эта ссылка не будет равна с первоначальной(callback - решение этой проблемы)

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown) // отписаться от события когда компонент будет размонтирован
    }
  })
  return (
    <div>
      <TypographyHeader>Key pressed</TypographyHeader>
      <div className={styles.container}>
        <TypographyText>
          Press the key corresponding to the key in "Random keys"
        </TypographyText>
        <div className={styles.wrapper}>
          <span className={styles.icon}>{keyPressedElement}</span>
        </div>
      </div>
    </div>
  )
}

export default KeyPressed
