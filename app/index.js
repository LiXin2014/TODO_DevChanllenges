import React from "react";
import ReactDom from "react-dom";
import AddTodo from "./components/addTodo";
import SelectedState, { States } from "./components/selectedState";
import { TodoItem } from "./components/todoItem";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            selectedState: States.All
        };

        this.onAddTodo = this.onAddTodo.bind(this);
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
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);