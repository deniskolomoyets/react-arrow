import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep } from "./store/slices"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground) //достаем стейт из редьюсера(обьявляли его в store)
  const dispatch = useAppDispatch()

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  return (
    <div>
      {state.currentStep}{" "}
      <button onClick={() => dispatch(setCurrentStep())}>
        Change Current step
      </button>
    </div>
  )
}

export default Playground
