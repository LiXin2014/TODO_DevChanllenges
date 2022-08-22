import React from "react";

export const States = {
    All: 'All',
    Active: 'Active',
    Completed: 'Completed',
}

export default function SelectedState({ selected, onChangeSelectedState }) {
    return (
        <div className="states-container">
            <button className="state_button" onClick={() => onChangeSelectedState(States.All)}>
                All
                <div className={`state-square ${selected === States.All ? "selected" : ""}`}></div>
            </button>
            <button className="state_button" onClick={() => onChangeSelectedState(States.Active)}>
                Active
                <div className={`state-square ${selected === States.Active ? "selected" : ""}`}></div>
            </button>
            <button className="state_button" onClick={() => onChangeSelectedState(States.Completed)}>
                Completed
                <div className={`state-square ${selected === States.Completed ? "selected" : ""}`}></div>
            </button>
        </div>
    )
}