import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { tasksSlice } from "./tasks/tasksSlice"

const store = configureStore({
  reducer: tasksSlice.reducer,
})

setupListeners(store.dispatch)

export default store


