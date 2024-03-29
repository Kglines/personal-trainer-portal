import { csrfFetch } from './csrf';

// ********************** Action Types ********************** //
const GET_ANNOUNCEMENTS = 'announcements/get';
const GET_ONE_ANNOUNCEMENT = 'announcements/getOne';
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

export const getOneAnnouncement = (announcement) => {
    return {
        type: GET_ONE_ANNOUNCEMENT,
        payload: announcement
    }
}

export const createAnnouncement = (announcement) => {  
  return {
    type: CREATE_ANNOUNCEMENT,
    payload: announcement
  };
}

export const editAnnouncement = (announcement) => {
    // console.log('Edit Announcement Action ==== ', announcement)
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

    // console.log('Get Announcements Thunk Res ==== ', res)

    if(res.ok){
        const announcements = await res.json();
        dispatch(getAnnouncements(announcements));
        return announcements
    }
    return res;
}

export const getOneAnnouncementThunk = (announcementId) => async (dispatch) => {
    const res = await csrfFetch(`/api/announcements/${announcementId}`);
console.log('Get One Announcement Thunk Res ==== ', res)
    if(res.ok){
        const announcement = await res.json();
        dispatch(getOneAnnouncement(announcement));
        console.log('Get One Announcement Thunk ==== ', announcement)
        return announcement;
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
    // console.log('Edit Announcement Thunk ==== ', announcement)
    const res = await csrfFetch(`/api/announcements/${announcement.id}`, {
        method: 'PUT',
        body: JSON.stringify(announcement)
    });
    // console.log('Edit Announcement Thunk Res ==== ', res)

    if(res.ok){
        const updatedAnnouncement = await res.json();
        // console.log('Edit Announcement Thunk Updated Announcement ==== ', updatedAnnouncement)
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
            // newState = action.payload
            newState = action.payload.sort((a, b) => a.date - b.date)
            return newState;
        case GET_ONE_ANNOUNCEMENT:
            newState = action.payload;
            console.log('Get One Announcement Reducer ==== ', newState)
            return newState;
        case CREATE_ANNOUNCEMENT:
            newState = { ...state, [action.payload.id]: action.payload }
            return newState;
        case EDIT_ANNOUNCEMENT:
            // newState[action.payload.id] = action.payload;
            newState = { ...state, [action.payload.id]: action.payload }
            // console.log('Edit Announcement Reducer ==== ', newState)
            // newState = action.payload;
            return newState;
        case DELETE_ANNOUNCEMENT:
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default announcementsReducer;

