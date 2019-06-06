import * as ActionTypes from './TodoActionTypes';

const initialState = {
    data: [],
    loading: false,
    loaded: false,
    error: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionTypes.LOAD_TODOS:
        return { ...state, data: payload }

    case ActionTypes.LOAD_TODOS_SUCCESS:
        return { ...state, loaded: true }
    
    case ActionTypes.LOAD_TODOS_FAILURE:
        return { ...state, error: payload }
    
    case ActionTypes.SET_LOADING:
        return { ...state, loading: payload }
    
    case ActionTypes.SET_ERROR:
        return { ...state, error: payload }

    case ActionTypes.ADD_TODO : {
        let data = [ ...state.data ];
        data.push(payload);
        return {
            ...state,
            data
        }
    }

    case ActionTypes.DELETE_TODO : {
        let data = state.data.filter(item => item._id !== payload._id);
        return {
            ...state,
            data
        }
    }
    
    default:
        return state
    }
}
