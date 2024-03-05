export type  Task = {
  id: string;
  title: string;
  isComplete: boolean;
}

export type TaskList = {
  taskList: Task[];
	selectedTask: '';
  filterValue: string;
}