import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isExpended: true,
  },
  reducers: {
    toggle: (state) => {
      state.isExpended = !state.isExpended
    },
  },
})

export const { toggle } = sidebarSlice.actions
export default sidebarSlice.reducer
