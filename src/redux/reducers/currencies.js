import {
    FETCH_DOLAR,
    FETCH_EURO,
    FETCH_REAL
} from '../constants';

const initialState = {
    dolar: { value: 0, pending: false },
    real: { value: 0, pending: false },
    euro: { value: 0, pending: false }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case `${FETCH_DOLAR}_REJECTED`:
            return { ...state, dolar: {
                ...state.dolar,
                pending: false
            }};
        case `${FETCH_EURO}_REJECTED`:
            return { ...state, euro: {
                ...state.euro,
                pending: false
            }};
        case `${FETCH_REAL}_REJECTED`:
            return { ...state, real: {
                ...state.real,
                pending: false
            }};

        case `${FETCH_DOLAR}_PENDING`:
            return { ...state, dolar: {
                ...state.dolar,
                pending: true
            }};
        case `${FETCH_EURO}_PENDING`:
            return { ...state, euro: {
                ...state.euro,
                pending: true
            }};
        case `${FETCH_REAL}_PENDING`:
            return { ...state, real: {
                ...state.real,
                pending: true
            }};

        case `${FETCH_DOLAR}_FULFILLED`:
            return { ...state, dolar: {
                value: action.payload.data.valor,
                pending: false
            }};
        case `${FETCH_EURO}_FULFILLED`:
            return { ...state, euro: {
                value: action.payload.data.valor,
                pending: false
            }};
        case `${FETCH_REAL}_FULFILLED`:
            return { ...state, real: {
                value: action.payload.data.valor,
                pending: false
            }};
        default:
            return state;
    }
}