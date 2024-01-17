import { csrfFetch } from './csrf';

// ********************** Action Types ********************** //
const GET_COMMENTS = 'comments/get';
const GET_ONE_COMMENT = 'comments/getOne';
const CREATE_COMMENT = 'comments/create';
const EDIT_COMMENT = 'comments/edit';
const DELETE_COMMENT = 'comments/delete';

// ********************** Action Creators ********************** //
export const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    payload: comments
  };
}

export const getOneComment = (comment) => {
    return {
        type: GET_ONE_COMMENT,
        payload: comment
    }
}

export const createComment = (comment) => {  
  return {
    type: CREATE_COMMENT,
    payload: comment
  };
}

export const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    payload: comment
  };
}

export const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    payload: commentId
  };
}

// // ********************** Thunks ********************** //
// export const getAllCommentsThunk = () => async (dispatch) => {
//     const res = await csrfFetch('/api/comments');

//     if(res.ok){
//         const comments = await res.json();
//         dispatch(getComments(comments));
//         return comments
//     }
//     return res;
// }

export const getAnnouncementCommentsThunk = (announcementId) => async (dispatch) => {
    const res = await csrfFetch(`/api/announcements/${announcementId}/comments`);
    console.log('GET ANNOUNCEMENT COMMENTS RES === ', res)
    if(res.ok){
        const comments = await res.json();
        console.log('GET ANNOUNCEMENT COMMENTS INSIDE THUNK === ', comments)
        dispatch(getComments(comments));
        return comments
    }
    return res;
}

export const getOneCommentThunk = (commentId) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${commentId}`);

    if(res.ok){
        const comment = await res.json();
        dispatch(getOneComment(comment));
        return comment
    }
    return res;
}

export const createCommentThunk = (comment) => async (dispatch) => {
  const res = await csrfFetch(`/api/announcements/${comment.announcementId}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment)
  });
  console.log('COMMENT THUNK === ', res)

  if(res.ok){
    const newComment = await res.json();
    dispatch(createComment(newComment));
    return newComment;
  }
  return res;
}

export const editCommentThunk = (comment) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${comment.id}`, {
    method: 'PUT',
    body: JSON.stringify(comment)
  });

  if(res.ok){
    const updatedComment = await res.json();
    dispatch(editComment(updatedComment));
    return updatedComment;
  }
  return res;
}

export const deleteCommentThunk = (commentId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE'
  });

  if(res.ok){
    const deletedComment = await res.json();
    dispatch(deleteComment(deletedComment));
    return deletedComment;
  }
  return res;
}

// ********************** Reducer ********************** //
const initialState = {};

const commentsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = {};
      action.payload.forEach(comment => {
        newState[comment.id] = comment;
      });
      return newState;
    case GET_ONE_COMMENT:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case CREATE_COMMENT:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case EDIT_COMMENT:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}

export default commentsReducer;
