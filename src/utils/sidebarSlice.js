import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isExpended: true,
    isSidebarOpen: true,
  },
  reducers: {
    toggle: (state) => {
      state.isExpended = !state.isExpended
    },
    close: (state) => {
      state.isSidebarOpen = false
    },
  },
})

export const { toggle, close } = sidebarSlice.actions
export default sidebarSlice.reducer
