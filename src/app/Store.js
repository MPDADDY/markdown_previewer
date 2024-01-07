import { configureStore } from "@reduxjs/toolkit";
import MarkDownReducer from "../features/markdown/MarkDownSlice";

const store = configureStore({
  reducer: {
       markDown: MarkDownReducer
  }
})

export default store