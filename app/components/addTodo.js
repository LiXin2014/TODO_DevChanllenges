import React from "react";

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.setState({
            text: ""
        });
    }

    render() {
        return (
            <div className="addTodo">
                <input type="text" id="addTodo_Input" name="todo" placeholder="add details"/>
                <button id="addTodo_Button" onClick={() =>{}}>Add</button>
            </div>
        )
    }
}