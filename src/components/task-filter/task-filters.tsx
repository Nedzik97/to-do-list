import { useDispatch , useSelector } from 'react-redux'
import { setFilteredList } from '../../store/tasks/tasksSlice'

import { getFilteredList } from '../../store/tasks/selectors'
import { filters } from '../../utils'

import styles from './task-filter.module.scss'

export const FilterButtons = (): JSX.Element => {
  const dispatch = useDispatch()
  const filteredTasks = useSelector(getFilteredList)

  const handleFilteredList = (currentList: string): void => {
    dispatch(setFilteredList(currentList))
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
        Completed
      </button>
      <button
        className={`${styles.filterButton} ${
          filteredTasks === filters.active ? styles.buttonSelected : ''
        }`}
        onClick={():void => handleFilteredList(filters.active)}
      >
        Active
      </button>
    </div>
  )
}