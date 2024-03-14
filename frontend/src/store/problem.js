import { csrfFetch } from "./csrf";

const GET_PROBLEMS = 'problems/get';
const GET_ONE_PROBLEM = 'problem/get';
const CREATE_PROBLEM = 'problem/create';
const EDIT_PROBLEM = 'problem/edit';
const DELETE_PROBLEM = 'problem/delete';

export const getProblems = (problems) => {
    return {
        type: GET_PROBLEMS,
        payload: problems
    }
}

export const getOneProblem = (problem) => {
    return {
        type: GET_ONE_PROBLEM,
        payload: problem
    }
}

export const createProblem = (problem) => {
    return {
        type: CREATE_PROBLEM,
        payload: problem
    }
}

export const editProblem = (problem) => {
    return {
        type: EDIT_PROBLEM,
        payload: problem
    }
}

export const deleteProblem = (problem) => {
    return {
        type: DELETE_PROBLEM,
        payload: problem
    }
}

// *************************** Thunks ***************************
export const getProblemsThunk = () => async (dispatch) => {
    const res = await csrfFetch('/api/problems')

    if(res.ok){
        const problems = await res.json()
        dispatch(getProblems(problems))
        return problems;
    }
    return res;
}

export const createProblemThunk = (problem) => async (dispatch) => {
    const res = await csrfFetch(`/api/machines/${problem.machineId}/problems`, {
        method: 'POST',
        body: JSON.stringify(problem)
    })

    if(res.ok){
        const problem = res.json()
        dispatch(createProblem(problem))
        return problem;
    }
    return res;
}

export const updateProblemThunk = (problem) => async (dispatch) => {
    const res = await csrfFetch(`/api/problems/${problem.id}`, {
        method: 'PUT',
        body: JSON.stringify(problem)
    })

    if(res.ok){
        const problem = res.json()
        dispatch(editProblem(problem))
        return problem;
    }
    return res;
}

const initialState = {};

const problemReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_PROBLEMS:
            newState = action.payload
            return newState;
        case GET_ONE_PROBLEM:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case CREATE_PROBLEM:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_PROBLEM:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_PROBLEM:
            newState = Object.assign({}, state);
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default problemReducer;
