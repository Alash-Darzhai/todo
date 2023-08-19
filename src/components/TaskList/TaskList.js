import { Component } from "react";
import PropTypes from 'prop-types'
import Task from "../Task";

import './TaskList.css'
export default class TaskList extends Component {
    render() {
        const { todos, onDeleted, onToggleDone, onToggleEdit, updateTask } = this.props
        const elements = todos.map(item => {
            const { id, label, ...itemProps } = item
            return (
                <Task key={id}
                    {...itemProps}
                    id={id}
                    label={label}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleEdit={() => onToggleEdit(id)}
                    updateTask={updateTask}
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
TaskList.defaultProps = {
    todos: [],
    onDeleted: () => { },
    onToggleDone: () => { },
    onToggleEdit: () => { },
    updateTask: () => { },
}
TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.objectOf),
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    onToggleEdit: PropTypes.func,
    updateTask: PropTypes.func,
}