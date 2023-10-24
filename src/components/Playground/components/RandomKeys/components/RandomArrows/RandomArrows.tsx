import styles from "./RandomArrows.module.css"

import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepsState } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }
    if (!element.success && element.success !== null) {
      return styles.iconUnsuccess
    }
    return styles.icon
  }
  return (
    <>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currrentValue as keyof IMapArrowCodes]}
        </span> // перебираем степс, на каждую итерацию счетчика будем добавлять элемент массива, в котором будет храниться currentValue(который представляет собой рандомный ключ для стрелки)(обращаемся по ключу и получаем стрелку)
      ))}
    </>
  )
}

export default RandomArrows
