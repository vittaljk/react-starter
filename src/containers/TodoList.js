import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TodoList extends Component {
    render() {
        return (
            <div>
                List works!
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
