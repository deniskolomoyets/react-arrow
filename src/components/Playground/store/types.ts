export interface IPlaygroundStepsState {
  currrentValue: string | null
  enteredValue: string | null
} //описываем тип который будет храниться в массиве со стрелками

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsState[]
}
