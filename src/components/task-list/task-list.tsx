import { useSelector} from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getTasksList} from '../../store/tasks/selectors';
import { TaskItem } from '../task/task';

import styles from "./task-list.module.scss";

export const TaskList = () => {
	const taskList = useSelector(getTasksList)

  return (
    <>
		{taskList.length > 0 ?
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
             <TaskItem  task={task} index={index}/>
            </CSSTransition >
          )
        })}
      </TransitionGroup>
			 : 'Not found task'}
    </>
  )
}
