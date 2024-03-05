import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction<string>('tasks/addTask');
export const removeTask = createAction<string>('tasks/removeTask');
export const setFilterTasks = createAction<string>('tasks/setFilterTasks');