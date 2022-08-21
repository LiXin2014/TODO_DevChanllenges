import React from "react";
import Todo from "./todo";
import { TodoState } from "./todoState";

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.nextId = 1;
        this.state = { text: "" };

        this.onAddTodo = this.onAddTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    render() {
        return (
            <div className="addTodo">
                <input type="text"
                    id="addTodo_Input"
                    name="todo"
                    placeholder="add details"
                    onChange={this.onChange}
                    value={this.state.text}
                    onKeyDown={this.onKeyDown} />
                <button id="addTodo_Button"
                    onClick={() => this.onAddTodo()}>Add</button>
            </div>
        )
    }

    /* Handles the click event on Add button */
    onAddTodo() {
        let newTodo = new Todo(this.nextId++, this.state.text, TodoState.Active);
        this.props.onAddTodo(newTodo);
        this.setState({
            text: ""
        });
    }

    /* Handles the change event on input */
    onChange(event) {
        let text = event.target.value;
        this.setState({
            text
        });
    }

    /* Handles the keydown event on input */
    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onAddTodo();
        }
    }
}