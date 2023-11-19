import { csrfFetch } from "./csrf";

// ******************** Action Variables ********************
const GET_MACHINES = 'machines/get';
const GET_MACHINE = 'machines/getMachine';
const ADD_MACHINE = 'machines/add';
const UPDATE_MACHINE = 'machines/update';
const DELETE_MACHINE = 'machines/delete';

// ******************** Action Creators ********************
const getMachines = (machines) => ({
    type: GET_MACHINES,
    payload: machines
});

const getOneMachine = (machine) => ({
    type: GET_MACHINE,
    payload: machine
});

const addMachine = (machine) => ({
    type: ADD_MACHINE,
    payload: machine
});

const updateMachine = (machine) => ({
    type: UPDATE_MACHINE,
    payload: machine
});

const deleteMachine = (machine) => ({
    type: DELETE_MACHINE,
    payload: machine
});

// ******************** Thunks ********************
export const fetchMachinesThunk = () => async (dispatch) => {
    // console.log('FETCH MACHINES THUNK')
    const res = await csrfFetch('/api/machines');
// console.log('RES === ', res)
    if(res.ok){
        const machines = await res.json();
        // console.log('MACHINES IF RES IS OK === ', machines   );
        dispatch(getMachines(machines));
        return machines
    }
    return res;
}

export const fetchMachineThunk = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/machines/${id}`);
console.log('Get Machine Thunk RES === ', res)
    if(res.ok){
        const machine = await res.json();
        console.log('MACHINE IN THUNK === ', machine)
        dispatch(getOneMachine(machine));
        return machine
    }
    return res;
}

export const createMachineThunk = (machine) => async (dispatch) => {
    const res = await csrfFetch('/api/machines', {
        method: 'POST',
        body: JSON.stringify(machine)
    });

    if(res.ok){
        const newMachine = await res.json();
        dispatch(addMachine(newMachine));
        return newMachine;
    }
    return res;
}

export const editMachineThunk = (machine) => async (dispatch) => {
    const res = await csrfFetch(`/api/machines/${machine.id}`, {
        method: 'PUT',
        body: JSON.stringify(machine)
    });

    if(res.ok){
        const updatedMachine = await res.json();
        dispatch(updateMachine(updatedMachine));
        return updatedMachine;
    }
    return res;
}

export const removeMachineThunk = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/machines/${id}`, {
        method: 'DELETE'
    });

    if(res.ok){
        const machine = await res.json();
        dispatch(deleteMachine(machine));
        return machine;
    }
    return res;
}

// ******************** Reducer ********************
const initialState = {};

const machinesReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_MACHINES:
            newState = action.payload
            return newState;
        case GET_MACHINE:
            newState = action.payload;
            console.log('GET_MACHINE REDUCER === ', newState)
            return newState;
        case ADD_MACHINE:
            newState = { ...state, [action.payload.id]: action.payload }
            return newState;
        case UPDATE_MACHINE:
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_MACHINE:
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default machinesReducer;
