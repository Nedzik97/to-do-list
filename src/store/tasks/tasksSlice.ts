import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaskList} from '../../types/type'

const initialState: TaskList = {
  taskList: [],
  filter: 'all',
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      const newTask = {
        id: new Date().toISOString(),
  			title: action.payload,
  			isComplete: false,
        isEditTask: false
      }
      state.taskList.push(newTask)
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.taskList = state.taskList.filter(task => task.id !== action.payload)
    },
    editTaskTitle(state, action: PayloadAction<{ id: string, newTitle: string }>) {
      const {id, newTitle} = action.payload
      const editableTask = state.taskList.find(task => task.id === id)
      if (editableTask) {
        editableTask.title = newTitle
      }
    },
    completeTask(state, action: PayloadAction<string>) {
      const taskId = action.payload
      const task = state.taskList.find(task => task.id === taskId)
      if (task) {
        task.isComplete = !task.isComplete
      }
    },
    setFilteredList(state, action: PayloadAction<string>) {
      console.log("payload", action.payload)
      state.filter = action.payload
    },
  },
})

export const { addTask, deleteTask, setFilteredList, completeTask, editTaskTitle} = tasksSlice.actions
