import React from 'react'
import fetchCurrency, { Cotization, CotizationFetching } from '../../redux/actions/fetching';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

const currencySymbol = '$';

const Currency = ({ cotization }) => {

    let interval = null;

    const currencyLower = cotization.getSlug();
    const price = useSelector(state => state.currencies[currencyLower].value);
    const pending = useSelector(state => state.currencies[currencyLower].pending);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCurrency(cotization));
    }, []);

    React.useEffect(() => {
        interval = setInterval(() => {
            dispatch(fetchCurrency(cotization));
        }, 6000);
        return () => {
            clearInterval(interval);
        }
    }, [interval])

    return (
        <div className="currency rounded p-4 shadow-md min-w-widget bg-white text-center">
            <h4 className="text-center text-lg">{cotization.getName()}</h4>
            <p className="text-center text-3xl text-green-800">{cotization.getFormattedPrice(price)}</p>
            {pending && <Loader type="ThreeDots" color="#00BFFF" height={25} width={25} />}
        </div>
    )
}

export default Currency
