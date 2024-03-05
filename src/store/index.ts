import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { tasksSlice } from "./tasks/tasksSlice"


export const store = configureStore({
    reducer: tasksSlice.reducer,
  })

  setupListeners(store.dispatch)


