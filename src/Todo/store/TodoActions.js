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

export const getGlobalTasks = () => {
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