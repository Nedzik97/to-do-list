import { useSelector } from 'react-redux';
import cx from 'classnames'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getTasksList } from '../../store/tasks/selectors';

import styles from './task-list.module.scss'

export const TaskList = () => {
	const taskList = useSelector(getTasksList)

  return (
    <>
      <TransitionGroup>
        {taskList.map((task, index) => {
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
              <div className={styles.taskWrapper} key={task.id}>
                <div className={task.isComplete ? styles.done : ''}>
                  <span className={styles.taskNumber}>{index + 1}</span>
                  <span className={styles.taskText}>{task.title}</span>
                </div>
                <div className={styles.buttonWraper}>
                  {task.isComplete ? null : (
                    <button
                      className={cx(styles.button, styles.buttonEditTask)}
                    
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className={cx(styles.button, styles.buttonDeleteTask)}
                  
                  >
                    Delete
                  </button>
                </div>
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </>
  )
}
