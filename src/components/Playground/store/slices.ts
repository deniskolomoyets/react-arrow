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
        currrentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
      }) //при каждом шаге таймера будет создаваться элемент массива, в который будет помещаться стрелка
    },
  },
})

export const { setCurrentStep, setSteps } = playgroundSlice.actions
export default playgroundSlice.reducer
