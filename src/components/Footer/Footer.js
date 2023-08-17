import { Component } from 'react';
import TasksFilter from '../TasksFilter';
import './Footer.css'

export default class Footer extends Component {
    render() {
        const { done, deletedCompletedItems, filter, onFilterChange } = this.props

        return (
            <footer className="footer" >
                <span className="todo-count">{done} items left</span>
                <TasksFilter
                    filter={filter}
                    onFilterChange={onFilterChange}
                />
                <button
                    className="clear-completed"
                    onClick={deletedCompletedItems}>Clear completed
                </button>

            </footer>
        )
    }

}