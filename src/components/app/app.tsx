import { TaskForm } from '../task-form/task-form';
import { TaskList } from '../task-list/task-list';
import styles from './app.module.scss'

export const filters = {
  all: 'all',
  completed: 'completed',
  active: 'active',
}

export const App = () => {
  return (
    <div className={styles.App}>
			<h1 className={styles.pageTitle}>To Do list</h1>
			<TaskForm />
			<TaskList/>
    </div>
  );
}
