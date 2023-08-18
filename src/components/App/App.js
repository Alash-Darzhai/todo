import { Component } from 'react'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList'
import Footer from '../Footer'
import './App.css'

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Completed task'),
            this.createTodoItem('Editing task'),
            this.createTodoItem('Active task')
        ],
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            done: false,
            edit: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.filter((el) => el.id !== id)
            }
        })
    }

    deletedCompletedItems = () => {
        this.setState(({ todoData }) => {
            const newArr = todoData.filter((el) => !el.done)
            return {
                todoData: newArr
            }
        })
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            done: false,
            id: this.maxId++
        }
        this.setState(({ todoData }) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: todoData.map((item) => {
                    return item.id === id ? { ...item, done: !item.done } : item
                })
            }
        })
    }

    onToggleEdit = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.map((item) => {
                    return item.id === id ? { ...item, edit: true } : item
                }),
            }
        })
    }

    updateTask = (labelUpdate, id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.map((item) => {
                    return item.id === id ? { ...item, label: labelUpdate, edit: false } : item
                }),
            }
        })
    }

    onFilterChange = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { todoData, filter, edit } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const filteredItems = filter === 'all'
            ? todoData
            : filter === 'active'
                ? todoData.filter(item => !item.done)
                : todoData.filter(item => item.done);

        return (
            <section className='todoapp' >
                <NewTaskForm onItemAdded={this.addItem} />
                <section className='main'>
                    <TaskList todos={filteredItems}
                        onDeleted={this.deleteItem}
                        onToggleDone={this.onToggleDone}
                        onToggleEdit={this.onToggleEdit}
                        edit={edit}
                        updateTask={this.updateTask}
                    />
                </section>
                <Footer
                    done={todoCount}
                    deletedCompletedItems={this.deletedCompletedItems}
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                    onToggleDone={this.onToggleDone}
                />
            </section>
        )
    }
}