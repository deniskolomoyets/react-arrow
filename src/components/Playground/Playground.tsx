import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setCurrentStep } from "./store/slices"
import { INTERVAL_TIME } from "./constants"

import Controls from "./components/Controls"
import RandomKeys from "./components/RandomKeys"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground) //достаем стейт из редьюсера(обьявляли его в store)
  const dispatch = useAppDispatch()

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null) //переменная для паузы

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false) //не выносим в Controls потому что эти значения будем использовать в других  местах
  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setCurrentStep())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    } //если происходит размонтирование копонента, то нужно очищать таймер
  }, [isTimerActive, dispatch])

  return (
    <div>
      {state.currentStep}

      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
    </div>
  )
}

export default Playground
