import playgroundReducer, { initialState } from "../slices"

describe("initial state", () => {
  it("check initial state", () => {
    const state = playgroundReducer(undefined, { type: "unknown" })
    expect(state).toEqual(initialState) //toEqual потому что сравниваем обьекты. с простыми числами  toBe
  })
})
