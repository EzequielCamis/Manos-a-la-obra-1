import './App.css'

function App() {
  return (
    <div className="container">

      <h1 className="title">LISTA DE TAREAS DE EZEQUIEL</h1>

      {/* Caja de texto + botón */}
      <div className="task-input">
        <input 
          type="text" 
          placeholder="Escribe una tarea..."
          className="input-box"
        />
        <button className="add-btn">ADD</button>
      </div>

      {/* Lista de tareas (estática, sin funcionalidad) */}
      <ul className="task-list">

        <li className="task-item">
          <input type="checkbox" />
          <span className="task-text">Task N</span>
          <button className="delete-btn">🗑️</button>
        </li>

        <li className="task-item">
          <input type="checkbox" />
          <span className="task-text">Task N-1</span>
          <button className="delete-btn">🗑️</button>
        </li>

        <li className="task-item">
          <input type="checkbox" defaultChecked />
          <span className="task-text"><s>Completed Task N-2</s></span>
          <button className="delete-btn">🗑️</button>
        </li>

        <li className="task-item">
          <input type="checkbox" />
          <span className="task-text">Task K</span>
          <button className="delete-btn">🗑️</button>
        </li>

        <li className="task-item">
          <input type="checkbox" />
          <span className="task-text">Task 2</span>
          <button className="delete-btn">🗑️</button>
        </li>

        <li className="task-item">
          <input type="checkbox" defaultChecked />
          <span className="task-text"><s>Completed Task 1</s></span>
          <button className="delete-btn">🗑️</button>
        </li>

      </ul>
    </div>
  )
}

export default App
