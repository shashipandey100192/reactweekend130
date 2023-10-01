import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    mycount: (state) => {
        state.value += 50
      },
  }
})
export const { increment, decrement , mycount} = counterSlice.actions

export default counterSlice.reducer