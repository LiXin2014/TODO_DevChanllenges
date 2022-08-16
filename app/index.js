import React from "react";
import ReactDom from "react-dom";
import AddTodo from "./components/addTodo";
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div id="container">
                <h2 id="header">#todo</h2>
                <AddTodo />
            </div>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
);