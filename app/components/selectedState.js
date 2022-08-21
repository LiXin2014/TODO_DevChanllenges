import React from "react";

export const States = {
    All: 'All',
    Active: 'Active',
    Completed: 'Completed',
}

export default class SelectedState extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        const { selected } = this.props;

        return (
            <div className="states-container">
                <button className="state_button" onClick={() => this.onClick(States.All)}>
                    All
                    <div className={`state-square ${selected === States.All ? "selected": ""}`}></div>
                </button>
                <button className="state_button" onClick={() => this.onClick(States.Active)}>
                    Active
                    <div className={`state-square ${selected === States.Active ? "selected": ""}`}></div>
                </button>
                <button className="state_button" onClick={() => this.onClick(States.Completed)}>
                    Completed
                    <div className={`state-square ${selected === States.Completed ? "selected": ""}`}></div>
                </button>
            </div>
        )
    }

    onClick(selected) {
        this.props.onChangeSelectedState(selected);
    }
}