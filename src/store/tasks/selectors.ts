import type { State } from "../../types/state"
import { Task } from "../../types/type"

export const getTasksList = (state: State): Task[] => state.taskList
export const getFilteredList = (state: State): string => state.filteredList
