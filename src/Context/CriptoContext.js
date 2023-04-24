import React, { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();
const CriptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('BDT');
  const [symbol, setsymbol] = useState('৳');

  useEffect(() => {
    if (currency === 'BDT') {
      setsymbol('৳');
    } else if (currency === 'USD') {
      setsymbol('$');
    } else if (currency === 'INR') {
      setsymbol('₹');
    }
  }, [currency]);

  return (
    <>
      <Crypto.Provider value={{ currency, symbol, setCurrency }}>
        {children}
      </Crypto.Provider>
    </>
  );
};

export default CriptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
