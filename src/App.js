import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Currencies from './components/currencies/currencies';

function App() {

  return (
    <div className="sm:flex w-screen h-screen sm:justify-center sm:items-center bg-gray-300">
      <div className="container h-auto h-full sm:h-auto sm:w-3/4 lg:w-1/2 rounded p-4 mx-auto">
        <h1 className="text-center my-2 text-3xl">Cotización actual de la moneda Argentina</h1>
        <Currencies />
      </div>
    </div>
  );
}

export default App;
