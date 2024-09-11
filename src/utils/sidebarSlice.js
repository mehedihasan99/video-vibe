import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isExpended: true,
    isSidebarOpen: false,
  },
  reducers: {
    toggle: (state) => {
      state.isExpended = !state.isExpended
    },
    close: (state, action) => {
      state.isSidebarOpen = action.payload
    },
  },
})

export const { toggle, close } = sidebarSlice.actions
export default sidebarSlice.reducer
