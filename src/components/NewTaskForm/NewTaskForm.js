import { Component } from 'react'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
    state = {
        label: ''
    }

    onInputChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { onItemAdded } = this.props;
        onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo"
                        onChange={this.onInputChange}
                        placeholder="What needs to be done?"
                        value={this.state.label}
                        autoFocus />
                </form>
            </header>
        )
    }
}