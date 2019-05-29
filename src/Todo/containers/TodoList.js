import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGlobalTasks } from '../store/TodoActions'
// import Aux from '../../Hoc/Aux';
import Todo from '../components/Todo';

export class TodoList extends Component {
    componentDidMount() {
        this.props.getGlobalTasks();
    }

    render() {
        return (
            <div>
                {this.props.todoListLoading ? 'Loading...' : 
                    <Todo todoList={this.props.todoList}/>
                }
            </div>
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
        getGlobalTasks: () => dispatch(getGlobalTasks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
