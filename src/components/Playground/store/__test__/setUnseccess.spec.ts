import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
  setUnseccess,
} from "../slices"

describe("reducer setUnseccess", () => {
  it("check setUnseccess", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = playgroundReducer(setCurrentStepState, setSteps())

    const setUnseccessState = playgroundReducer(setStepsState, setUnseccess())

    expect(setUnseccessState.totalUnsuccessful).toBe(1)
    expect(setUnseccessState.steps[0].success).toBe(false)
  })
})
