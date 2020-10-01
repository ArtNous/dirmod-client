import React from 'react'
import fetchCurrency from '../../redux/actions/fetching';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

const currencySymbol = '$';

const Currency = ({ currency }) => {

    let interval = null;

    const [ hasToFetch, setHasToFetch ] = React.useState(false);

    const currencyLower = currency.toLowerCase();
    const price = useSelector(state => state.currencies[currencyLower].value);
    const pending = useSelector(state => state.currencies[currencyLower].pending);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCurrency(currencyLower));
    }, []);

    React.useEffect(() => {
        interval = setInterval(() => {
            console.info('Todo');
            dispatch(fetchCurrency(currencyLower));
        }, 6000);
        return () => {
            clearInterval(interval);
        }
    }, [interval])

    return (
        <div className="currency rounded p-4 shadow-md min-w-widget bg-white text-center">
            <h4 className="text-center">{currency}</h4>
            <p className="text-center">{currencySymbol + price}</p>
            {pending && <Loader type="ThreeDots" color="#00BFFF" height={25} width={25} />}
        </div>
    )
}

export default Currency
