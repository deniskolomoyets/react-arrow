// import styles from "./RandomKeys.module.css"
import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { IMapArrowCodes } from "../../types"
export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  //   const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      {state.steps.map((element) => (
        <span key={element.step}>
          {MAP_ARROW_CODES[element.currrentValue as keyof IMapArrowCodes]}
        </span> // перебираем степс, на каждую итерацию счетчика будем добавлять элемент массива, в котором будет храниться currentValue(который представляет собой рандомный ключ для стрелки)(обращаемся по ключу и получаем стрелку)
      ))}
    </div>
  )
}

export default RandomKeys
