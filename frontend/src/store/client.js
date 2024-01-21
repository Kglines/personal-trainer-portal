import {csrfFetch} from './csrf';

// ******************** Action Variables ********************
const GET_CLIENTS = 'clients/getClients';
const GET_CLIENT = 'clients/getClient';
const ADD_CLIENT = 'clients/addClient';
const UPDATE_CLIENT = 'clients/updateClient';
const DELETE_CLIENT = 'clients/deleteClient';

// ******************** Action Creators ********************
const getClients = (clients) => ({
    type: GET_CLIENTS,
    payload: clients
});

const getClient = (client) => ({
    type: GET_CLIENT,
    payload: client
});

const addClient = (client) => ({
    type: ADD_CLIENT,
    payload: client
});

const updateClient = (client) => ({
    type: UPDATE_CLIENT,
    payload: client
});

const deleteClient = (client) => ({
    type: DELETE_CLIENT,
    payload: client
});

// ******************** Thunks ********************
export const fetchClients = () => async (dispatch) => {
    const res = await csrfFetch('/api/clients');
    if(res.ok){
        const clients = await res.json();
        dispatch(getClients(clients));
        // console.log('FETCH CLIENTS ===== ', clients)
        return clients
    }
    return res;
}

export const fetchClient = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/clients/${id}`);

    if(res.ok){
        const client = await res.json();
        dispatch(getClient(client));
        return client
    }
    return res;
}

export const createClient = (client) => async (dispatch) => {
    const res = await csrfFetch('/api/clients', {
        method: 'POST',
        body: JSON.stringify(client)
    });

    if(res.ok){
        const newClient = await res.json();
        dispatch(addClient(newClient));
        return newClient
    }
    return res;
};

export const editClient = (client) => async (dispatch) => {
    const res = await csrfFetch(`/api/clients/${client.id}`, {
        method: 'PUT',
        body: JSON.stringify(client)
    });

    if(res.ok){
        const updatedClient = await res.json();
        dispatch(updateClient(updatedClient));
        return updatedClient
    }
    return res;
}

export const removeClient = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/clients/${id}`, {
        method: 'DELETE'
    });

    if(res.ok){
        const deletedClient = await res.json();
        dispatch(deleteClient(deletedClient));
        return deletedClient
    }
    return res;
}

// ******************** Reducer ********************
const initialState = {};

const clientsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case GET_CLIENTS:
            // newState = {};
            // newState = action.payload.sort((a, b) => {
            //     return b.firstName - a.firstName
            // });
            newState = action.payload;
            // console.log('CLIENTS REDUCER ===== ', newState)
            return newState;
        case GET_CLIENT:
            // newState[action.client.id] = action.client;
            newState = action.payload;
            return newState;
        case ADD_CLIENT:
            // newState[action.client.id] = action.client;
            newState = {...state, [action.payload.id]: action.payload}
            return newState;
        case UPDATE_CLIENT:
            // newState[action.client.id] = action.client;
            newState = action.payload;
            return newState;
        case DELETE_CLIENT:
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default clientsReducer;
