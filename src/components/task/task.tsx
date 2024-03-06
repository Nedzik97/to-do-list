import { Task } from "../../types/type"
import { useState } from "react"
import { UpdateForm } from "../update-form/update-form"
import { useDispatch } from "react-redux"
import { deleteTask, completeTask} from "../../store/tasks/tasksSlice"
import cx from "classnames"

import styles from "./task.module.scss"

type TaskProps = {
  task: Task
  index: number
}

export const TaskItem = ({task, index}: TaskProps): JSX.Element => {
  const [isEditTask, setIsEditTask] = useState(false)
  const dispatch = useDispatch()
	
  const handleDeleteTask = (e: React.MouseEvent<HTMLButtonElement>, taskId: string): void => {
    e.stopPropagation()
    dispatch(deleteTask(taskId))
  }

  const handleCompleteTask = ( id: string): void => {
    dispatch(completeTask(id))
  }

  const handleEditTask = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    setIsEditTask(true)
  }


  return (
    <div className={styles.taskWrapper} key={task.id} onClick={(): void => handleCompleteTask(task.id)}>
      <div className={task.isComplete ? styles.done : ''} >
        <span className={styles.taskNumber}>{index + 1}</span>
        {!isEditTask ? <span className={styles.taskText}>{task.title}</span> : <UpdateForm id={task.id} setIsEditTask={setIsEditTask}/>}
      </div>
      {!isEditTask ? <div className={styles.buttonWraper}>
        {task.isComplete ? null : 
          <button
            className={cx(styles.button, styles.buttonEditTask)}
            onClick={handleEditTask}
          >
					Edit
          </button>
        }
        <button
          className={cx(styles.button, styles.buttonDeleteTask)}
          onClick={(e):void => handleDeleteTask(e, task.id)}
        >
				Delete
        </button>
      </div> : null}
    </div>
  )
}