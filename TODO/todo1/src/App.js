import React, { Component } from 'react';
import './App.css';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      editing: false,
      editingIndex: null
    };
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  handleNewTodoChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleAddTodo() {
    const { todos, newTodo } = this.state;
    this.setState({
      todos: [...todos, { text: newTodo, completed: false }],
      newTodo: ''
    });
  }

  handleToggleTodo(index) {
    const { todos } = this.state;
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    this.setState({ todos: newTodos });
  }

  handleEditTodo (index) {
    const { todos } = this.state;
    this.setState({
      editing: true,
      editingIndex: index,
      newTodo: todos[index].text
    });
  }

  handleUpdateTodo () {
    const { todos, newTodo, editingIndex } = this.state;
    const newTodos = [...todos];
    newTodos[editingIndex].text = newTodo;
    this.setState({
      todos: newTodos,
      editing: false,
      editingIndex: null,
      newTodo: ''
    });
  }

  handleDeleteTodo (index) {
    const { todos } = this.state;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos,
      editing: false,
      editingIndex: null,
      newTodo: ''
    });
  }

  render() {
    const { todos, newTodo, editing } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input type="text" value={newTodo} onChange={this.handleNewTodoChange} />
          {editing ? (
            <button onClick={this.handleUpdateTodo}>Update Todo</button>
          ) : (
            <button onClick={this.handleAddTodo}>Add Todo</button>
          )}
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleToggleTodo(index)}
              />
              {editing && this.state.editingIndex === index ? (
                <input type="text" value={newTodo} onChange={this.handleNewTodoChange} />
              ) : (
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
              )}
              {editing && this.state.editingIndex === index ? (
                <button onClick={this.handleUpdateTodo}>Update</button>
              ) : (
                <button onClick={() => this.handleEditTodo(index)}>Edit</button>
              )}
              <button onClick={() => this.handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default TodoList;
