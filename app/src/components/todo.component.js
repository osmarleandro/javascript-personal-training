import React, { Component } from 'react';

const Lista = (props) => (
    <ul>
        {props.tasks.map(task => {
            return <li
                key={task.id}
                onClick={() => props.toogle(task)}>

                {task.text}
            </li>
        })}
    </ul>
);

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { text: '', tasks: [] }
    }

    handleChange(event) {
        this.setState({ text: event.target.value })
    }

    handleClick() {
        let { text, tasks } = this.state;
        let task = { id: new Date().getTime(), text: text, done: false };
        tasks = tasks.concat(task);
        this.setState({ tasks: tasks, text: '' });
    }

    toogle(task) {
        this.setState(prev => ({
            tasks: prev.tasks.map(t => {
                if (t.id === task.id) return { ...t, done: !t.done }
            })
        }));
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <input
                    value={this.state.text}
                    onChange={(e) => this.handleChange(e)}
                />
                <button onClick={() => this.handleClick()}>Add</button>

                <h3>Pendentes</h3>
                <Lista tasks={this.state.tasks.filter(e => !e.done)} toogle={this.toogle.bind(this)}></Lista>

                <h3>Concluídas</h3>
                <Lista tasks={this.state.tasks.filter(e => e.done || false)} toogle={this.toogle.bind(this)}></Lista>

                <p>{JSON.stringify(this.state)}</p>
            </div>
        );
    }
}

export default Todo;