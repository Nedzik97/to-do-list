export type  Task = {
  id: string;
  title: string;
  isComplete: boolean;
	isEditTask: boolean;
}

export type TaskList = {
  taskList: Task[];
  filterValue: string;
}
