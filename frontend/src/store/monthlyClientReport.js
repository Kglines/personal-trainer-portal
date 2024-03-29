import { csrfFetch } from "./csrf";

// ********************** Action Types ********************** //
const GET_MONTHLY_CLIENT_REPORT = "monthlyClientReport/get";
const GET_ONE_MONTHLY_CLIENT_REPORT = "monthlyClientReport/getOne";
const CREATE_MONTHLY_CLIENT_REPORT = "monthlyClientReport/create";
const EDIT_MONTHLY_CLIENT_REPORT = "monthlyClientReport/edit";
const DELETE_MONTHLY_CLIENT_REPORT = "monthlyClientReport/delete";

// ********************** Action Creators ********************** //
export const getMonthlyClientReports = (monthlyClientReports) => {
  return {
    type: GET_MONTHLY_CLIENT_REPORT,
    payload: monthlyClientReports,
  };
};

export const getOneMonthlyClientReport = (monthlyClientReport) => {
  return {
    type: GET_ONE_MONTHLY_CLIENT_REPORT,
    payload: monthlyClientReport,
  };
};

export const createMonthlyClientReport = (monthlyClientReport) => {
  return {
    type: CREATE_MONTHLY_CLIENT_REPORT,
    payload: monthlyClientReport,
  };
};

export const editMonthlyClientReport = (monthlyClientReport) => {
  return {
    type: EDIT_MONTHLY_CLIENT_REPORT,
    payload: monthlyClientReport,
  };
};

export const deleteMonthlyClientReport = (monthlyClientReportId) => {
  return {
    type: DELETE_MONTHLY_CLIENT_REPORT,
    payload: monthlyClientReportId,
  };
};

// ********************** Thunks ********************** //
export const getMonthlyClientReportsThunk = () => async (dispatch) => {
    const res = await csrfFetch("/api/monthlyClientReports");
    
    if (res.ok) {
        const monthlyClientReports = await res.json();
        dispatch(getMonthlyClientReports(monthlyClientReports));
        return monthlyClientReports;
    }
    return res;
};

export const getOneMonthlyClientReportThunk = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/monthlyClientReports/${id}`);
    
    if (res.ok) {
        const monthlyClientReport = await res.json();
        dispatch(getOneMonthlyClientReport(monthlyClientReport));
        return monthlyClientReport;
    }
    return res;
};

export const createMonthlyClientReportThunk = (monthlyClientReport) => async (dispatch) => {
    const res = await csrfFetch("/api/monthlyClientReports", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(monthlyClientReport),
    });

    if (res.ok) {
        const newMonthlyClientReport = await res.json();
        dispatch(createMonthlyClientReport(newMonthlyClientReport));
        return newMonthlyClientReport;
    }
    return res;
};

export const editMonthlyClientReportThunk = (monthlyClientReport) => async (dispatch) => {
    const res = await csrfFetch(`/api/monthlyClientReports/${monthlyClientReport.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(monthlyClientReport),
    });

    if (res.ok) {
        const updatedMonthlyClientReport = await res.json();
        dispatch(editMonthlyClientReport(updatedMonthlyClientReport));
        return updatedMonthlyClientReport;
    }
    return res;
};

export const deleteMonthlyClientReportThunk = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/monthlyClientReports/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        dispatch(deleteMonthlyClientReport(id));
    }
    return res;
};

// ********************** Reducer ********************** //
const initialState = {};

const monthlyClientReportReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_MONTHLY_CLIENT_REPORT:
            newState = {};
            action.payload.forEach((monthlyClientReport) => {
                newState[monthlyClientReport.id] = monthlyClientReport;
            });
            return newState;
        case GET_ONE_MONTHLY_CLIENT_REPORT:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        case CREATE_MONTHLY_CLIENT_REPORT:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        case EDIT_MONTHLY_CLIENT_REPORT:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_MONTHLY_CLIENT_REPORT:
            newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default monthlyClientReportReducer;

