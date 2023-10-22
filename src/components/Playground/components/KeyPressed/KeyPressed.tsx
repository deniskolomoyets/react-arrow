// import styles from "./KeyPressed.module.css"
import { useCallback, useEffect } from "react"

import { MAP_ARROW_CODES } from "../../constants"
export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (MAP_ARROW_CODES.hasOwnProperty(e.key)) {
      console.log(e.key)
    }
  }, []) // фун-ия показывает нажатую клавишу. используем CallBack потому что при каждом рендере будет меняться ссылка на функцию, и когда мы его будем размонтировать в return, то эта ссылка не будет равна с первоначальной(callback - решение этой проблемы)

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown) // отписаться от события когда компонент будет размонтирован
    }
  })
  return <div>KeyPressed</div>
}

export default KeyPressed
