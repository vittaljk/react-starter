import * as ActionTypes from './TodoActionTypes';

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
        setTimeout(() => {
            dispatch(loadTodos([
                { id: 1, name: 'react', description: 'learn react' },
                { id: 2, name: 'redux', description: 'learn redux' },
            ]));
            dispatch(setLoading(false));
            // TODO: handle error and update error state
        }, 3000);
    }
}