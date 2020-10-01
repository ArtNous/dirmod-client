import axios from 'axios';
import {
    FETCH_DOLAR,
    FETCH_EURO,
    FETCH_REAL
} from '../constants';

export default currency => dispatch => {
    let type = FETCH_DOLAR
    
    if(currency !== 'dolar') {
        type = currency === 'euro' ? FETCH_EURO : FETCH_REAL;
    }

    dispatch({
        type,
        payload: axios({
            url: `${process.env.REACT_APP_SERVICE_URL}/cotizacion/${currency}`,
            headers: { Accept: 'application/json' },
            timeout: 1500
        })
    });
}