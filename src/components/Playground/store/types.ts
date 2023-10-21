export interface IPlaygroundStepsState {
  currrentValue: string
} //описываем тип который будет храниться в массиве со стрелками

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsState[]
}
