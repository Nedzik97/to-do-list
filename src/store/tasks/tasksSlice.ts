import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskList} from '../../types/type';


const initialState: TaskList = {
  taskList: [],
	selectedTask: '',
  filterValue: 'all',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
		addTask(state, action: PayloadAction<string>) {
			const newTask = {
				id: new Date().toISOString(),
  			title: action.payload,
  			isComplete: false,
			}
			state.taskList.push(newTask);
		},
		removeCard(state, action: PayloadAction<string>) {
			state.taskList = state.taskList.filter(task => task.id !== action.payload);
		},
		editTaskName(state, action: PayloadAction<{ id: string, newTitle: string }>) {
      const taskToEdit = state.taskList.find(task => task.id === action.payload.id);
      if (taskToEdit) {
        taskToEdit.title = action.payload.newTitle;
      }
    },
    setFilterValue(state, action: PayloadAction<string>) {
      state.filterValue = action.payload;
    },
  },
});

export const { addTask, removeCard, setFilterValue } = tasksSlice.actions;
