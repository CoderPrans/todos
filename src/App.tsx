import React, {useState, useEffect} from 'react';
import './App.css';

let draggedItem: Todo; //draggedItem
let draggedOverItem: Todo; //draggedOver
let draggedIdx: number | null;

type TodoProps = {
  todo: Todo;
  index: number;
  toggleCompleteTodo: (i: number) => void;
  deleteTodo: (i: number) => void;
  onDragStart(e: React.DragEvent, i: number): void;
  onDragOver(e: React.DragEvent, i: number): void;
  onDragEnd: () => void;
};

type Todo = {
  text: string;
  isCompleted: boolean;
};

function Todo({
  todo,
  index,
  toggleCompleteTodo,
  deleteTodo,
  onDragStart,
  onDragOver,
  onDragEnd,
}: TodoProps) {
  return (
    <div className="todo" key={`${index}`}>
      {!('ontouchstart' in window) ? (
        <span
          draggable
          onDragStart={e => onDragStart(e, index)}
          onDragOver={e => onDragOver(e, index)}
          onDragEnd={onDragEnd}>
          <button>&#9776;</button>
        </span>
      ) : null}
      <p
        onClick={() => toggleCompleteTodo(index)}
        style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
        {todo.text}
      </p>
      <div>
        <button className="delete" onClick={() => deleteTodo(index)}>
          {' '}
          🗑️{' '}
        </button>
      </div>
    </div>
  );
}

function TodoForm({addTodo}: {addTodo: (text: string) => void}) {
  const [value, setValue] = useState('');
  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add Todos .."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
function App() {
  const initialTodos: Todo[] = localStorage.getItem('_todos')
    ? JSON.parse(localStorage.getItem('_todos') || '{}')
    : [
        {text: 'Learn React Hooks', isCompleted: false},
        {text: 'Make Coffe', isCompleted: false},
        {text: 'Make a ToDo App', isCompleted: false},
      ];
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    localStorage.setItem('_todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo: (t: string) => void = text => {
    const newTodos: Todo[] = [...todos, {text, isCompleted: false}];
    setTodos(newTodos);
  };
  const toggleCompleteTodo: (i: number) => void = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = newTodos[index].isCompleted ? false : true;
    setTodos(newTodos);
  };
  const deleteTodo: (i: number) => void = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const onDragStart: (e: React.DragEvent, i: number) => void = (
    e,
    idxDragged,
  ) => {
    draggedIdx = idxDragged;
    draggedItem = todos[idxDragged];
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData(
      'text/html',
      `${(e.target as HTMLElement).parentNode}`,
    );
    e.dataTransfer.setDragImage(
      (e.target as Element).parentNode as Element,
      20,
      20,
    );
  };
  const onDragEnd = () => {
    draggedIdx = null;
  };
  const onDragOver: (e: React.DragEvent, i: number) => void = (
    e,
    idxDragOver,
  ) => {
    e.preventDefault();
    draggedOverItem = todos[idxDragOver];
    //if the item is dragged over itself, ignore
    if (draggedItem === draggedOverItem) {
      return;
    }
    // filter out the currently dragged item
    let newTodos = [...todos].filter(todo => todo.text !== draggedItem.text);
    // add the dragged item after draggedOverItem
    newTodos.splice(idxDragOver, 0, draggedItem);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <h1> todo: </h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleCompleteTodo={toggleCompleteTodo}
            deleteTodo={deleteTodo}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;
