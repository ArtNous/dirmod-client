import axios from 'axios';

import { CotizationFetching } from '../../models/cotizations';

export default cotization => dispatch => {
    const fetching = new CotizationFetching;
    fetching.setCotization(cotization);

    dispatch({
        type: fetching.getType(),
        payload: fetching.request()
    });
}