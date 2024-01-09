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
const getCommentsThunk = () => async (dispatch) => {
    const res = await csrfFetch('/api/comments');

    if(res.ok){
        const comments = await res.json();
        dispatch(getComments(comments));
        return comments
    }
    return res;
}
