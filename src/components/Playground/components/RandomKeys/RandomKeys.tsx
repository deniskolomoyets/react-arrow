import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../UI"

import RandomArrows from "./components/RandomArrows"
import WelcomText from "./components/WelcomText"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <TypographyHeader>Random keys</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
