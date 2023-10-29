import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepsState } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"
import cn from "classnames"
import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    return cn(
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnsuccess,
      stylesCommon.icon,
    ) //при каких условиях показываем цвет
  }
  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currrentValue as keyof IMapArrowCodes]}
        </span> // перебираем степс, на каждую итерацию счетчика будем добавлять элемент массива, в котором будет храниться currentValue(который представляет собой рандомный ключ для стрелки)(обращаемся по ключу и получаем стрелку)
      ))}
    </div>
  )
}

export default RandomArrows
