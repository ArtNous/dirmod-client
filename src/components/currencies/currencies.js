import React from 'react'
import Currency from './currency';

const currencies = [ 'Dolar', 'Euro', 'Real' ];

const Currencies = () => {

    return (
        <ul className="currencies flex-col h-widget-container sm:h-auto sm:flex-row container flex items-center justify-between my-2">
            {currencies.map(curr => <Currency currency={curr} />)}
        </ul>
    )
}

export default Currencies
