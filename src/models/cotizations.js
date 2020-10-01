import axios from 'axios';

/**
 * Comentario solo para
 * cuestiones de la prueba
 * El siguiente es la implementación del
 * patron Strategy Pattern.
 */

/**
 * 
 * @param {string} currency Dolar, Euro, Real...
 * @param {string} type 
 */
export const Cotization = function(currency, type) {
    this.name = currency;
    this.type = type;

    this.getSlug = () => this.name.toLowerCase();
    this.getName = () => this.name;
    this.getType = () => this.type;
    this.getFormattedPrice = price => `$${price}`;
}

/**
 * Encargada de la integración con
 * redux
 */
export const CotizationFetching = function() {
    this.setCotization = cotization => {
        this.cotization = cotization;
    }

    this.getType = () => {
        return this.cotization.type;
    }

    this.request = () => {
        return axios({
            url: `${process.env.REACT_APP_SERVICE_URL}/cotizacion/${this.cotization.name}`,
            headers: { Accept: 'application/json' },
            timeout: 1500
        })   
    }
}