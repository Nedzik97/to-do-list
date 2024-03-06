import { Task } from "../../types/type"
import { useState } from "react"
import { UpdateForm } from "../update-form/update-form"
import { useDispatch } from "react-redux"
import { deleteTask, completeTask} from "../../store/tasks/tasksSlice"
import cx from "classnames"
import {ReactComponent as СheckmarkIcon } from '../../assets/checkmark.svg'

import styles from "./task.module.scss"

type TaskProps = {
  task: Task
}

export const TaskItem = ({task }: TaskProps): JSX.Element => {
  const [isEditTask, setIsEditTask] = useState(false)
  const dispatch = useDispatch()
	
  const handleDeleteTask = ( taskId: string): void => {
    dispatch(deleteTask(taskId))
  }

  const handleCompleteTask = ( id: string): void => {
    dispatch(completeTask(id))
  }

  const handleEditTask = (): void => {
    setIsEditTask(true)
  }

  return (
    <div className={styles.taskWrapper} key={task.id}>
      <div className={task.isComplete ? styles.done : ''} >
        <span className={styles.taskNumber} onClick={(): void => handleCompleteTask(task.id)}>
          <СheckmarkIcon className={styles.checkmark}/>
        </span>
        {!isEditTask ? <span className={styles.taskText} onClick={(): void => handleCompleteTask(task.id)}>{task.title}</span> : <UpdateForm id={task.id} setIsEditTask={setIsEditTask}/>}
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
          onClick={():void => handleDeleteTask( task.id )}
        >
				Delete
        </button>
      </div> : null}
    </div>
  )
}