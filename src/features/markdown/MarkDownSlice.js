import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    content: "# Welcome to my React Markdown Previewer!",
}

  const MarkDownSlice = createSlice({
  name: 'markdown',
  initialState,
  reducers: {
    setMarkDownContent: (state, action) => {
       state.content = action.payload
    }
  }
})

export const { setMarkDownContent } = MarkDownSlice.actions;

export default MarkDownSlice.reducer