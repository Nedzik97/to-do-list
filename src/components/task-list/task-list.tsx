import { useSelector} from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getTasksList, getFilteredList} from '../../store/tasks/selectors'
import { filters } from '../../utils'
import { TaskItem } from '../task/task'

import styles from "./task-list.module.scss"

export const TaskList = (): JSX.Element => {
  const taskList = useSelector(getTasksList)
  const filteredList = useSelector(getFilteredList)

  const filteredTasks = taskList.filter((task) => {
    if (filteredList === filters.all) {
      return true
    }
    if (filteredList === filters.active) {
      return task.isComplete === false
    }
    return task.isComplete === true
  })

  return (
    <>
      {filteredTasks.length > 0 ?
        <TransitionGroup>
          {filteredTasks.map((task, index) => {
            return (
              <CSSTransition
                key={task.id}
                timeout={800}
                classNames={{
                  enter: styles.taskEnter,
                  enterActive: styles.taskEnterActive,
                  exit: styles.taskExit,
                  exitActive: styles.taskExitActive,
                }}
              >
                <TaskItem  task={task} index={index} />
              </CSSTransition >
            )
          })}
        </TransitionGroup>
			 : 'Not found task'}
    </>
  )
}
