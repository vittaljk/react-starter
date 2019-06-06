import React from 'react'
import PropTypes from 'prop-types'
import Aux from '../../Hoc/Aux';
import { Button } from "antd";

function Todo(props) {
    return (
        <Aux>
            <div>{props.todo.name}</div>
            <div>{props.todo.description}</div>
            <Button type="primary" onClick={() => props.deleteTodo(props.todo)}>Delete</Button>
            <Button type="primary" onClick={() => props.editTodo(props.todo)}>Edit</Button>
        </Aux>
    )
}

Todo.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
}

export default Todo

