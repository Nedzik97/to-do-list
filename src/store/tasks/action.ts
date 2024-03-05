import { createAction } from "@reduxjs/toolkit";

type EditTaskNamePayload = {
  id: string;
  newTitle: string;
}

export const addTask = createAction<string>('tasks/addTask');
export const deleteTask = createAction<string>('tasks/deleteTask');
export const editTaskTitle = createAction<EditTaskNamePayload>('tasks/editTaskTitle');
export const setFilterTasks = createAction<string>('tasks/setFilterTasks');