export interface IPlaygroundStepsState {
  step: number
  currrentValue: string | null
  enteredValue: string | null
  success: boolean | null
} //описываем тип который будет храниться в массиве со стрелками

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsState[]
  totalSuccessful: number
  totalUnsuccessful: number
}
