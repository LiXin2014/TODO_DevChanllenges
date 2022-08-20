import React from "react";
import ReactDom from "react-dom";
import AddTodo from "./components/addTodo";
import SelectedState from "./components/selectedState";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };

        this.onAddTodo = this.onAddTodo.bind(this);
    }

    render() {
        return (
            <div id="container">
                <h2 id="header">#todo</h2>
                <SelectedState />
                <AddTodo onAddTodo={(newTodo) => this.onAddTodo(newTodo)} />
                <ul id="todoList">
                    {this.state.todos.map((todo) => (
                        <div id="todo" key={todo.id}>
                            <input type="checkbox" id={`todo_input${todo.id}`}/>
                            <label htmlFor={`todo_input${todo.id}`}>{todo.text}</label>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }

    /* Add a todo item to the state */
    onAddTodo(newTodo) {
        this.setState((state) => {
            let todos = state.todos;
            todos.push(newTodo);
            return {
                todos
            }
        });
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);