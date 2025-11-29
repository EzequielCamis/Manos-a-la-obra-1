import './styles/estilos_globales.css'
import { TextInput } from './components/atoms/TextInput'
import { AddButton } from './components/atoms/AddButton'
import { TaskList } from './components/organisms/TaskList'

function App() {
  return (
    <div className="container">
      <h1 className="title">LISTA DE TAREAS DE EZEQUIEL</h1>
      <div className="task-input">
        <TextInput />
        <AddButton />
      </div>
      <TaskList />
    </div>
  )
}

export default App
