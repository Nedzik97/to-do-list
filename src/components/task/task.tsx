import { Task } from "../../types/type";
import { useState } from "react";
import { UpdateForm } from "../update-form/update-form";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasks/action";
import cx from "classnames";

import styles from "./task.module.scss";

type TaskProps = {
	task: Task;
	index: number;
}


export const TaskItem = ({task, index}: TaskProps):JSX.Element => {
	const [isEditTask, setIsEditTask] = useState(false);

	const dispatch = useDispatch();
	
	const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

	return (
		<div className={styles.taskWrapper} key={task.id}>
		<div className={task.isComplete ? styles.done : ''}>
			<span className={styles.taskNumber}>{index + 1}</span>
		 
			{!isEditTask ? <span className={styles.taskText}>{task.title}</span> : <UpdateForm id={task.id} setIsEditTask={setIsEditTask}/>}
		</div>
		{!isEditTask ? <div className={styles.buttonWraper}>
			{task.isComplete ? null : (
				<button
					className={cx(styles.button, styles.buttonEditTask)}
					onClick={() => setIsEditTask(true)}
				>
					Edit
				</button>
			)}
			<button
				className={cx(styles.button, styles.buttonDeleteTask)}
				onClick={() => handleDeleteTask(task.id)}
			>
				Delete
			</button>
		</div> : null}
	</div>
	)
}