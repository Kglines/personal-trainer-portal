import { csrfFetch } from "./csrf";

// ******************** Action Variables ********************
const GET_MACHINES = 'machines/getMachines';
const GET_MACHINE = 'machines/getMachine';
const ADD_MACHINE = 'machines/addMachine';
const UPDATE_MACHINE = 'machines/updateMachine';
const DELETE_MACHINE = 'machines/deleteMachine';

// ******************** Action Creators ********************
const getMachines = (machines) => ({
    type: GET_MACHINES,
    machines
});

const getMachine = (machine) => ({
    type: GET_MACHINE,
    machine
});

const addMachine = (machine) => ({
    type: ADD_MACHINE,
    machine
});

const updateMachine = (machine) => ({
    type: UPDATE_MACHINE,
    machine
});

const deleteMachine = (machine) => ({
    type: DELETE_MACHINE,
    machine
});

// ******************** Thunks ********************
export const fetchMachines = () => async (dispatch) => {
    const res = await csrfFetch('/api/machines');

    if(res.ok){
        const machines = await res.json();
        dispatch(getMachines(machines));
        return machines
    }
    return res;
}

export const fetchMachine = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/machines/${id}`);

    if(res.ok){
        const machine = await res.json();
        dispatch(getMachine(machine));
        return machine
    }
    return res;
}

export const createMachine = (machine) => async (dispatch) => {
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

export const editMachine = (machine) => async (dispatch) => {
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

export const removeMachine = (id) => async (dispatch) => {
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
            // newState = action.payload.forEach(announcement => {
            //     newState[announcement.id] = announcement;
            // });
            newState = action.payload
            return newState;
        case GET_MACHINE:
            newState = action.payload;
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
