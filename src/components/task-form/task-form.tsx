import { useState } from 'react'
import { addTask } from '../../store/tasks/tasksSlice'
import { useDispatch} from 'react-redux'

import styles from './task-form.module.scss'

export const TaskForm = (): JSX.Element => {
  const [formValue, setFormValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const dispatch = useDispatch()

  const validationForm = (): boolean => {
    return formValue.length > 10
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValue(e.target.value)
    setIsValid(validationForm())
  }

  const saveCard = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (validationForm()) { 
      dispatch(addTask(formValue))
      setFormValue('')
    }
  }

  return (
    <>
      <div className={styles.row}>
        <form className={styles.inputWrapper} onSubmit={saveCard}>
          <input
            value={formValue}
            onChange={(e):void => handleInputChange(e)}
            className={styles.inputAddTask}
            required
          />
          {!isValid && 
            <p  className={styles.invalidText}>Minimum length should be 10 characters.</p>
          }
          <button className={styles.buttonCreateTask} disabled={!isValid}>Add Task</button>
        </form>
      </div>
      <br />
    </>
  )
}