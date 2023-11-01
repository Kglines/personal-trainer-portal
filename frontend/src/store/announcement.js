import { csrfFetch } from './csrf';

// ********************** Action Types ********************** //
const GET_ANNOUNCEMENTS = 'announcements/get';
const CREATE_ANNOUNCEMENT = 'announcements/create';
const EDIT_ANNOUNCEMENT = 'announcements/edit';
const DELETE_ANNOUNCEMENT = 'announcements/delete';

// ********************** Action Creators ********************** //
export const getAnnouncements = (announcements) => {
  return {
    type: GET_ANNOUNCEMENTS,
    payload: announcements
  };
}

export const createAnnouncement = (announcement) => {  
  return {
    type: CREATE_ANNOUNCEMENT,
    payload: announcement
  };
}

export const editAnnouncement = (announcement) => {
  return {
    type: EDIT_ANNOUNCEMENT,
    payload: announcement
  };
}   

export const deleteAnnouncement = (announcementId) => {
  return {
    type: DELETE_ANNOUNCEMENT,
    payload: announcementId
  };
}

// // ********************** Thunks ********************** //

export const getAnnouncementsThunk = () => async (dispatch) => {
    const res = await csrfFetch('/api/announcements');

    if(res.ok){
        const announcements = await res.json();
        dispatch(getAnnouncements(announcements));
        return announcements
    }
    return res;
}

export const createAnnouncementThunk = (announcement) => async (dispatch) => {
    const res = await csrfFetch('/api/announcements', {
        method: 'POST',
        body: JSON.stringify(announcement)
    });

    if(res.ok){
        const newAnnouncement = await res.json();
        dispatch(createAnnouncement(newAnnouncement));
        return newAnnouncement;
    }
    return res;
}

export const editAnnouncementThunk = (announcement) => async (dispatch) => {
    const res = await csrfFetch(`/api/announcements/${announcement.id}`, {
        method: 'PUT',
        body: JSON.stringify(announcement)
    });

    if(res.ok){
        const updatedAnnouncement = await res.json();
        dispatch(editAnnouncement(updatedAnnouncement));
        return updatedAnnouncement;
    }
    return res;
}

export const deleteAnnouncementThunk = (announcementId) => async (dispatch) => {
    const res = await csrfFetch(`/api/announcements/${announcementId}`, {
        method: 'DELETE'
    });

    if(res.ok){
        const deletedAnnouncement = await res.json();
        dispatch(deleteAnnouncement(deletedAnnouncement.id));
        return deletedAnnouncement;
    }
    return res;
}

// ********************** Reducer ********************** //
const initialState = {};

const announcementsReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_ANNOUNCEMENTS:
            // newState = action.payload.forEach(announcement => {
            //     newState[announcement.id] = announcement;
            // });
            newState = action.payload
            return newState;
        case CREATE_ANNOUNCEMENT:
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_ANNOUNCEMENT:
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_ANNOUNCEMENT:
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default announcementsReducer;

