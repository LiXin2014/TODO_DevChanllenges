import React from "react";

export const States = {
    All: 'All',
    Active: 'Active',
    Completed: 'Completed',
}

export default class SelectedState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: States.All}
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <div className="states-container">
                <button className="state_button" onClick={() => this.onClick(States.All)}>
                    All
                    <div className={`state-square ${this.state.selected === States.All ? "selected": ""}`}></div>
                </button>
                <button className="state_button" onClick={() => this.onClick(States.Active)}>
                    Active
                    <div className={`state-square ${this.state.selected === States.Active ? "selected": ""}`}></div>
                </button>
                <button className="state_button" onClick={() => this.onClick(States.Completed)}>
                    Completed
                    <div className={`state-square ${this.state.selected === States.Completed ? "selected": ""}`}></div>
                </button>
            </div>
        )
    }

    onClick(selected) {
        this.setState({
            selected
        })
    }
}