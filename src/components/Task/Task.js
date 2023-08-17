import { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
import './Task.css'

export default class Task extends Component {
    state = {
        label: ''
    }

    render() {
        const { label, onDeleted, onToggleDone, onToggleEdit, done, edit } = this.props;

        let classNames = '';
        if (done) {
            classNames = 'completed'
        }
        if (edit) {
            classNames = 'editing'
        }

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

                <input type="text" class="edit" value={label} ></input>

            </li >
        )
    }
}