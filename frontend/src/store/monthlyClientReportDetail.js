import { csrfFetch } from "./csrf";

// ********************** Action Types ********************** //
const GET_MONTHLY_CLIENT_REPORT_DETAIL = "monthlyClientReportDetail/get";
const GET_ONE_MONTHLY_CLIENT_REPORT_DETAIL = "monthlyClientReportDetail/getOne";
const CREATE_MONTHLY_CLIENT_REPORT_DETAIL = "monthlyClientReportDetail/create";
const EDIT_MONTHLY_CLIENT_REPORT_DETAIL = "monthlyClientReportDetail/edit";
const DELETE_MONTHLY_CLIENT_REPORT_DETAIL = "monthlyClientReportDetail/delete";

// ********************** Action Creators ********************** //
export const getMonthlyClientReportDetails = (monthlyClientReportDetails) => {
  return {
    type: GET_MONTHLY_CLIENT_REPORT_DETAIL,
    payload: monthlyClientReportDetails,
  };
};

export const getOneMonthlyClientReportDetail = (monthlyClientReportDetail) => {
  return {
    type: GET_ONE_MONTHLY_CLIENT_REPORT_DETAIL,
    payload: monthlyClientReportDetail,
  };
}

export const createMonthlyClientReportDetail = (monthlyClientReportDetail) => {
  return {
    type: CREATE_MONTHLY_CLIENT_REPORT_DETAIL,
    payload: monthlyClientReportDetail,
  };
};

export const editMonthlyClientReportDetail = (monthlyClientReportDetail) => {
    return {
        type: EDIT_MONTHLY_CLIENT_REPORT_DETAIL,
        payload: monthlyClientReportDetail,
    };
};

export const deleteMonthlyClientReportDetail = (monthlyClientReportDetailId) => {
    return {
        type: DELETE_MONTHLY_CLIENT_REPORT_DETAIL,
        payload: monthlyClientReportDetailId,
    };
};

// ********************** Thunks ********************** //
export const getMonthlyClientReportDetailsThunk = () => async (dispatch) => {
    const res = await csrfFetch("/api/monthlyClientReportDetails");
    
    if (res.ok) {
        const monthlyClientReportDetails = await res.json();
        dispatch(getMonthlyClientReportDetails(monthlyClientReportDetails));
        return monthlyClientReportDetails;
    }
    return res;
};

export const getOneMonthlyClientReportDetailThunk = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/monthlyClientReportDetails/${id}`);
    
    if (res.ok) {
        const monthlyClientReportDetail = await res.json();
        dispatch(getOneMonthlyClientReportDetail(monthlyClientReportDetail));
        return monthlyClientReportDetail;
    }
    return res;
}

export const createMonthlyClientReportDetailThunk = (monthlyClientReportDetail) => async (dispatch) => {
    const res = await csrfFetch(`/api/monthlyClientReportDetails`, {
        method: "POST",
        body: JSON.stringify(monthlyClientReportDetail),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (res.ok) {
        const monthlyClientReportDetail = await res.json();
        dispatch(createMonthlyClientReportDetail(monthlyClientReportDetail));
        return monthlyClientReportDetail;
    }
    return res;
};

export const editMonthlyClientReportDetailThunk = (monthlyClientReportDetail) => async (dispatch) => {
    const res = await csrfFetch(`/api/monthlyClientReportDetails/${monthlyClientReportDetail.id}`, {
        method: "PUT",
        body: JSON.stringify(monthlyClientReportDetail),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (res.ok) {
        const monthlyClientReportDetail = await res.json();
        dispatch(editMonthlyClientReportDetail(monthlyClientReportDetail));
        return monthlyClientReportDetail;
    }
    return res;
};

export const deleteMonthlyClientReportDetailThunk = (monthlyClientReportDetailId) => async (dispatch) => {
    const res = await csrfFetch(`/api/monthlyClientReportDetails/${monthlyClientReportDetailId}`, {
        method: "DELETE",
    });

    if (res.ok) {
        dispatch(deleteMonthlyClientReportDetail(monthlyClientReportDetailId));
    }
    return res;
};

// ********************** Reducer ********************** //
const initialState = {};

const monthlyClientReportDetailReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_MONTHLY_CLIENT_REPORT_DETAIL:
            return action.payload;
        case GET_ONE_MONTHLY_CLIENT_REPORT_DETAIL:
            newState[action.payload.id] = action.payload;
            return newState;
        case CREATE_MONTHLY_CLIENT_REPORT_DETAIL:
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_MONTHLY_CLIENT_REPORT_DETAIL:
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_MONTHLY_CLIENT_REPORT_DETAIL:
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default monthlyClientReportDetailReducer;

