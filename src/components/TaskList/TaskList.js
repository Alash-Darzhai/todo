import { Component } from "react";
import Task from "../Task";

import './TaskList.css'
export default class TaskList extends Component {
    render() {
        const { todos, onDeleted, onToggleDone, onToggleEdit } = this.props
        const elements = todos.map(item => {
            const { id, ...itemProps } = item
            return (
                <Task key={id}
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleEdit={() => onToggleEdit(id)}
                    done={itemProps.done}
                />
            )
        })
        return (
            <ul className='todo-list'>
                {elements}
            </ul>
        )
    }
}