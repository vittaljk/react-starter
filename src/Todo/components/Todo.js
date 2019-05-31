import React from 'react'
import PropTypes from 'prop-types'
import Aux from '../../Hoc/Aux';

function Todo(props) {
    return (
        <Aux>
            <div>{props.todo.name}</div>
           <div>{props.todo.description}</div>
        </Aux>
    )
}

Todo.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
}

export default Todo

