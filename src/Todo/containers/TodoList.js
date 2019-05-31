import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../store/TodoActions'
import Aux from '../../Hoc/Aux';
import Todo from '../components/Todo';
import logo from '../../logo.svg';
import styles from './TodoList.module.scss';
import { Input } from "antd";

export class TodoList extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <Aux>
                <Input placeholder="What needs to be done?"/>
                {this.props.todoListLoading ? 
                    <img src={logo} className={styles['App-logo']} alt="logo" />
                    : <Todo todoList={this.props.todoList}/>
                }
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
        getTodos: () => dispatch(getTodos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
