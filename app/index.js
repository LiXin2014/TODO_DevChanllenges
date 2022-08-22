import React from "react";
import ReactDom from "react-dom";
import AddTodo from "./components/addTodo";
import SelectedState, { States } from "./components/selectedState";
import { TodoItem } from "./components/todoItem";
import { FaTrash } from "react-icons/fa";
import { TodoState } from "./components/todoState";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            selectedState: States.All
        };

        this.onAddTodo = this.onAddTodo.bind(this);
        this.onDeleteAllCompletedTodos = this.onDeleteAllCompletedTodos.bind(this);
    }

    render() {
        let todos = this.state.todos;
        if (this.state.selectedState !== States.All) {
            todos = todos.filter(todo => todo.state === this.state.selectedState);
        }

        return (
            <div id="container">
                <h2 id="header">#todo</h2>
                <SelectedState onChangeSelectedState={(newSelectedState) => this.onChangeSelectedState(newSelectedState)} selected={this.state.selectedState} />
                <AddTodo onAddTodo={(newTodo) => this.onAddTodo(newTodo)} />
                <ul id="todoList">
                    {todos.map((todo) => (
                        <TodoItem todo={todo} key={todo.id} selected={this.state.selectedState} />
                    ))}
                </ul>
                {this.state.selectedState === States.Completed &&
                    <button id="deleteAll" onClick={this.onDeleteAllCompletedTodos}>
                        <div id="deleteButtonContent">
                            <FaTrash/> delete all
                        </div>
                    </button>}
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

    /* Toggle State among All, Active, and Completed */
    onChangeSelectedState(selectedState) {
        this.setState({
            selectedState
        })
    }

    /* Delete all completed todos */
    onDeleteAllCompletedTodos() {
        const todos = this.state.todos.map(todo => {
            if(todo.state === TodoState.Completed) {
                todo.state = TodoState.Deleted;
            }
            return todo;
        });

        this.setState(
            { todos }
        );
        
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);