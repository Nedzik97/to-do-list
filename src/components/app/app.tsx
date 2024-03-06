import { TaskForm } from '../task-form/task-form'
import { TaskList } from '../task-list/task-list'
import { FilterButtons } from '../task-filter/task-filters'
import { useSelector } from 'react-redux'
import { getTasksList } from '../../store/tasks/selectors'

import styles from './app.module.scss'

export const App = (): JSX.Element => {
  const taskList = useSelector(getTasksList)

  return (
    <div className={styles.App}>
      <h1 className={styles.pageTitle}>To Do list</h1>
      <TaskForm />
      {taskList.length !== 0 && <FilterButtons /> }
      <TaskList/>
    </div>
  )
}
