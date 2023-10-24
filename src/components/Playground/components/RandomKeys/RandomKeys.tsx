import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { IPlaygroundStepsState } from "../../store/types"
import { IMapArrowCodes } from "../../types"
import styles from "./RandomKeys.module.css"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  //   const { isTimerActive } = props
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
    <div>
      <h3>Random keys</h3>
      {state.steps.length === 0 ? (
        <span>Hello</span>
      ) : (
        <>
          {state.steps.map((element) => (
            <span key={element.step} className={getStylesRandomKeys(element)}>
              {MAP_ARROW_CODES[element.currrentValue as keyof IMapArrowCodes]}
            </span> // перебираем степс, на каждую итерацию счетчика будем добавлять элемент массива, в котором будет храниться currentValue(который представляет собой рандомный ключ для стрелки)(обращаемся по ключу и получаем стрелку)
          ))}
        </>
      )}
    </div>
  )
}

export default RandomKeys
