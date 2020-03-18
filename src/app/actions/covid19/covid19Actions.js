import httpService from "../../../services/http/httpService";

export const DATA_FETCH_REQUEST = 'DATA_FETCH_REQUEST';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_ERROR = 'DATA_FETCH_ERROR';

export const updateData = () => (dispatch) => {
    dispatch({ type: DATA_FETCH_REQUEST });
    httpService.get(`/data`)
        .then((response) => {
            dispatch({ type: DATA_FETCH_SUCCESS, payload: response.data });
        }, (error) => {
            dispatch({ type: DATA_FETCH_ERROR, payload: error });
        });
};