import { JSX } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredList } from '../../store/tasks/tasks-slice'

import { getFilteredList, getTasksList } from '../../store/tasks/selectors'
import { filters } from '../../utils'

import styles from './task-filter.module.scss'

export const FilterButtons = (): JSX.Element => {
  const dispatch = useDispatch()
  const filteredTasks = useSelector(getFilteredList)
  const taskList = useSelector(getTasksList)

  const handleFilteredList = (currentList: string): void => {
    dispatch(setFilteredList(currentList))
  }

  const countTasks = (type: string): number => {
    switch (type) {
      case filters.completed: {
        return taskList.filter((task) => task.isComplete).length
      }
      case filters.active: {
        return taskList.filter((task) => !task.isComplete).length
      }
      default: {
        return filteredTasks.length
      }
    }
  }

  return (
    <div className={styles.sortButtonWrapper}>
      <button
        className={`${styles.filterButton} ${
          filteredTasks === filters.all ? styles.buttonSelected : ''
        }`}
        onClick={():void => handleFilteredList(filters.all)}
      >
        All tasks
      </button>
      <button
        className={`${styles.filterButton} ${
          filteredTasks === filters.completed ? styles.buttonSelected : ''
        }`}
        onClick={():void => handleFilteredList(filters.completed)}
      >
        Completed {countTasks(filters.completed)}
      </button>
      <button
        className={`${styles.filterButton} ${
          filteredTasks === filters.active ? styles.buttonSelected : ''
        }`}
        onClick={():void => handleFilteredList(filters.active)}
      >
        Active {countTasks(filters.active)}
      </button>
    </div>
  )
}
