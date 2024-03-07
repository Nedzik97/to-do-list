import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tasksSlice } from './tasks/tasks-slice'

const store = configureStore({
  'reducer': tasksSlice.reducer,
})

setupListeners(store.dispatch)

export default store
