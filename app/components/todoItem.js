import React from "react";
import { TodoState } from "./todoState";
import { FaTrash } from "react-icons/fa";
import { States } from "./selectedState";

export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.todo.state === TodoState.Completed
        }

        this.onSelectTodo = this.onSelectTodo.bind(this);
    }

    render() {
        const { todo, selected } = this.props;
        return (
            <div className="todo">
                <div>
                    <input type="checkbox"
                        id={`todo_input${todo.id}`}
                        onChange={(event) => {
                            this.onSelectTodo(todo, event);
                        }}
                        checked={this.state.completed}
                    />
                    <label htmlFor={`todo_input${todo.id}`}>{todo.text}</label>
                </div>
                {selected === States.Completed && <FaTrash className="trash"/>}
            </div>
        )
    }

    /* Check or uncheck a todo item */
    onSelectTodo(todo, event) {
        todo.state = event.target.checked ? TodoState.Completed : TodoState.Active;
        this.setState({
            completed: event.target.checked
        })
    }
}