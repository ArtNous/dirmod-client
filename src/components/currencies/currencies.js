import React from 'react'
import { FETCH_DOLAR, FETCH_REAL, FETCH_EURO } from '../../redux/constants';
import Currency from './currency';
import { Cotization } from '../../models/cotizations';

/**
 * Si queremos agregar mas,
 * venimos aca, instanciamos nuevas
 * cotizaciones
 * @var Cotization[]
 */
const cotizations = [
    new Cotization('Dolar', FETCH_DOLAR),
    new Cotization('Euro', FETCH_EURO),
    new Cotization('Real', FETCH_REAL),
];

const Currencies = props => {

    return (
        <ul className="currencies flex-col h-widget-container sm:h-auto sm:flex-row container flex items-center justify-between my-2">
            {cotizations.map(cot => <Currency cotization={cot} />)}
        </ul>
    )
}

export default Currencies
