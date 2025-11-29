import './TaskItem.css'
import { TaskCheckbox } from '../atoms/TaskCheckbox'
import { DeleteButton } from '../atoms/DeleteButton'

export function TaskItem({ label, completed = false }) {
  const itemClassName = completed ? 'task-item completed' : 'task-item'

  return (
    <li className={itemClassName}>
      <TaskCheckbox defaultChecked={completed} />
      <span className="task-text">{label}</span>
      <DeleteButton />
    </li>
  )
}
