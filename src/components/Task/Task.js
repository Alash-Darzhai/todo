import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import './Task.css'

export default class Task extends Component {
    state = {
        label: ''
    }

    onChangeValue = (e) => {
        this.setState({ label: e.target.value })
    }

    onSubmitEdit = (e) => {
        e.preventDefault()
        const { id, updateTask } = this.props
        const { label } = this.state
        updateTask(label, id)
        this.setState({
            label: '',
        })
    }
    render() {
        const { label, onDeleted, onToggleDone, onToggleEdit, done, edit } = this.props;

        const classNames = edit ? 'editing' : done ? 'completed' : ''

        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
                    <label>
                        <span className="description" >{label}</span>
                        <span className="created">created {formatDistanceToNow(new Date(), { includeSeconds: true })} ago</span>
                    </label>
                    <button className="icon icon-edit" onClick={onToggleEdit}></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>

                <form onSubmit={this.onSubmitEdit}>
                    <input type="text" className="edit" defaultValue={label} onKeyDown={this.onChangeValue} autoFocus />
                </form>

            </li >
        )
    }
}