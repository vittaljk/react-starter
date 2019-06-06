import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, addTodo, deleteTodo, editTodo } from '../store/TodoActions'
import Aux from '../../Hoc/Aux';
import Todo from '../components/Todo';
import logo from '../../logo.svg';
import styles from './TodoList.module.scss';
import { List, Button } from "antd";
import TodoModal from '../components/TodoModal';

export class TodoList extends Component {
    state = {
        todoActionModalVisible: false,
        selectedTodo: {
            name: '',
            description: ''
        },
        action: 'ADD'
    };

    initializeFormAndModalClose = () => {
        this.setState({
            todoActionModalVisible: false,
            selectedTodo: {
                name: '',
                description: ''
            }
        });
    }

    componentDidMount() {
        this.props.getTodos();
    }
    
    openTodoActionModal = (todoActionModalVisible = true) => {
        this.setState({
            todoActionModalVisible,
            action: 'ADD'
        });
    };

    handleOk = () => {
        switch (this.state.action) {
            case 'ADD':
                this.props.addTodo(this.state.selectedTodo);
                break;
            
            case 'EDIT':
                this.props.editTodo(this.state.editTodo);
                break;

            default:
                break;
        }
        this.initializeFormAndModalClose();
    };

    handleCancel = () => {
        console.log(this.state.selectedTodo);
        this.initializeFormAndModalClose();
    };

    handleNameInputChange = e => {
        this.setState({
            selectedTodo: { ...this.state.selectedTodo, name: e.target.value }
        });
    }

    handleDescriptionInputChange = e => {
        this.setState({
            selectedTodo: { ...this.state.selectedTodo, description: e.target.value }
        });
    }

    handleDeleteTodo = (todo) => {
        this.props.deleteTodo(todo);
    }

    handleEditTodo = () => {
        this.setState({
            todoActionModalVisible: true,
            action: 'EDIT'
        })
    }

    render() {
        return (
            <Aux>
                <Button type="primary" onClick={this.openTodoActionModal}>Add Todo</Button>
                {this.props.todoListLoading ?
                    <img src={logo} className={styles['App-logo']} alt="logo" />
                    : (
                        <Aux>
                            <List
                                locale={{ emptyText: "No todo items" }}
                                dataSource={this.props.todoList}
                                renderItem={todo => (
                                    <List.Item>
                                        <Todo 
                                            todo={todo} 
                                            deleteTodo={this.handleDeleteTodo}
                                            editTodo={this.handleEditTodo}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Aux>
                    )
                }
                <TodoModal
                    todoActionModalVisible={this.state.todoActionModalVisible}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                    selectedTodo={this.state.selectedTodo}
                    handleDescriptionInputChange={this.handleDescriptionInputChange}
                    handleNameInputChange={this.handleNameInputChange}
                />
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoList : state.todo.data,
        todoListLoading: state.todo.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(getTodos()),
        addTodo: (payload) => dispatch(addTodo(payload)),
        deleteTodo: (payload) => dispatch(deleteTodo(payload)),
        editTodo: (payload) => dispatch(editTodo(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
