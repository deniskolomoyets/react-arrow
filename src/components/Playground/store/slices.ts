import { createSlice } from "@reduxjs/toolkit"
import { IPlaygroundState } from "./types"
import { ARR_ARROW_CODES } from "../constants"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
}
export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    }, //action
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)

      state.steps.push({
        step: state.currentStep,
        currrentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
        success: null,
      }) //при каждом шаге таймера будет создаваться элемент массива, в который будет помещаться стрелка
    },
    setEnteredValue: (state, action) => {
      const step = state.steps[state.currentStep - 1] //сохраняет объект который пришел в последнем значении
      const isSuccess = step.currrentValue === action.payload //cравниваем текущее значение с поступающим
      if (state.steps.length) {
        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            enteredValue: action.payload, //payload принимаю из компонента KeyPressed(там диспатч)
            success: isSuccess,
          } //изменяем enteredValue
        }
      }
    },
  },
})

export const { setCurrentStep, setSteps, setEnteredValue } =
  playgroundSlice.actions
export default playgroundSlice.reducer
