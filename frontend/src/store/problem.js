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
        const problems = res.json()
        dispatch(getProblems(problems))
        return problems;
    }
    return res;
}
