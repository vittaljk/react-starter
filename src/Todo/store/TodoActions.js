import * as ActionTypes from './TodoActionTypes';
import axios from 'axios';

export const setLoading = (payload) => ({
    type: ActionTypes.SET_LOADING,
    payload
})

export const setError = (payload) => ({
    type: ActionTypes.SET_ERROR,
    payload
})


export const loadTodos = (payload) => ({
    type: ActionTypes.LOAD_TODOS,
    payload
})

export const getTodos = () => {
    return dispatch => {
        dispatch(setLoading(true));
        axios.get(`${process.env.REACT_APP_API_URL}/todo`)
        .then(res => {
            dispatch(setLoading(false));
            if (res.data) {
                dispatch(loadTodos(res.data));
            }
        })
        .catch(e => {
            dispatch(setLoading(false));
            dispatch(setError(e));
        })
    }
}

export const insertTodo = (payload) => ({
    type: ActionTypes.ADD_TODO,
    payload
})

export const addTodo = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        axios.post(`${process.env.REACT_APP_API_URL}/todo`, payload)
        .then(res => {
            console.log(res)
            dispatch(setLoading(false));
            if (res.status === 200) {
                dispatch(insertTodo(res.data.data));
            }
        })
        .catch(e => {
            dispatch(setLoading(false));
            dispatch(setError(e));
        })
    }
}

export const removeTodo = (payload) => ({
    type: ActionTypes.DELETE_TODO,
    payload
})

export const deleteTodo = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        axios.delete(`${process.env.REACT_APP_API_URL}/todo/${payload._id}`)
        .then(res => {
            dispatch(setLoading(false));
            if (res.status === 200) {
                dispatch(removeTodo(payload));
            }
        })
        .catch(e => {
            dispatch(setLoading(false));
            dispatch(setError(e));
        })
    }
}

export const editTodoAction = (payload) => ({
    type: ActionTypes.EDIT_TODO,
    payload
})

export const editTodo = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        axios.put(`${process.env.REACT_APP_API_URL}/todo/${payload._id}`, payload)
        .then(res => {
            dispatch(setLoading(false));
            if (res.status === 200) {
                dispatch(editTodoAction(res.data.data));
            }
        })
        .catch(e => {
            dispatch(setLoading(false));
            dispatch(setError(e));
        })
    }
}
