import React from "react";
import ReactDom from "react-dom";
import AddTodo from "./components/addTodo";
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
                <AddTodo onAddTodo={(newTodo) => this.onAddTodo(newTodo)} />
                <ul>
                    {this.state.todos.map((todo) => (
                        <li>{todo.text}</li>
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