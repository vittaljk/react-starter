import React from 'react'
import PropTypes from 'prop-types'
import Aux from '../../Hoc/Aux';

function Todo(props) {
    return (
        props.todoList.map(todo => (
            <Aux key={todo._id}>
                <div>{todo.name}</div>
                <div>{todo.description}</div>
            </Aux>
        ))
    )
}

Todo.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
}

export default Todo

