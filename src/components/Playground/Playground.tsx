import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setCurrentStep, setSteps, setUnseccess } from "./store/slices"
import { END_GAME_CONDITIONS, INTERVAL_TIME } from "./constants"

import Controls from "./components/Controls"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score"
import Modal from "./components/Modal"
import Description from "./components/Description"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground) //достаем стейт из редьюсера(обьявляли его в store)
  const dispatch = useAppDispatch()

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null) //переменная для паузы

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false) //не выносим в Controls потому что эти значения будем использовать в других  местах
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnseccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    } //если происходит размонтирование копонента, то нужно очищать таймер
  }, [isTimerActive, dispatch])
  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT

    isSuccessful && setIsSuccessEndGame(true)
    isUnsuccessful && setIsSuccessEndGame(false)

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])

  return (
    <div>
      {state.currentStep}

      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      <Description />

      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  )
}

export default Playground
