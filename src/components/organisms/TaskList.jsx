import './TaskList.css'
import { TaskItem } from '../molecules/TaskItem'

export function TaskList() {
  return (
    <ul className="task-list">
      <TaskItem label="Task N" />
      <TaskItem label="Task N-1" />
      <TaskItem label="Completed Task N-2" completed />
      <TaskItem label="Task K" />
      <TaskItem label="Task 2" />
      <TaskItem label="Completed Task 1" completed />
    </ul>
  )
}
