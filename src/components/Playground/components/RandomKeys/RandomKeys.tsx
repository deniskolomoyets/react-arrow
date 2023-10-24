import { useAppSelector } from "../../../../app/hooks"

import RandomArrows from "./components/RandomArrows"

// import styles from "./RandomKeys.module.css"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  //   const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <h3>Random keys</h3>
      {state.steps.length === 0 ? <span>Hello</span> : <RandomArrows />}
    </div>
  )
}

export default RandomKeys
