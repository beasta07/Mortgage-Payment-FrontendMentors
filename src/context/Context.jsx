import React, { createContext, useState } from 'react';
const MortgageContext = createContext();

const MortgageProvider  = ({ children }) => {

  const [mortgageAmount, setMortgageAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageYears, setMortgageYears] = useState('');
  const [monthlyMortgage, setMonthlyMortgage] = useState(0);
  const [totalMortgage, setTotalMortgage] = useState(0);

  const calculateMortgage = (amount, years, rate) => {
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12; // monthly rate
    const n = parseInt(years) * 12; // total months
  
    if (!P || !r || !n) {
      setMonthlyMortgage(0);
      setTotalMortgage(0);
      return;
    }
  
    if (r === 0) {
      const monthly = P / n;
      setMonthlyMortgage(monthly);
      setTotalMortgage(P);
    } else {
      const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyMortgage(monthly);
      setTotalMortgage(monthly * n);
    }
  };
  

  return (
    <MortgageContext.Provider
      value={{
        mortgageAmount,
        setMortgageAmount,
        interestRate,
        setInterestRate,
        mortgageYears,
        setMortgageYears,
        monthlyMortgage,
        totalMortgage,
        calculateMortgage,
      }}
    >
      {children}
    </MortgageContext.Provider>
  );
};

export default MortgageProvider;
export { MortgageProvider,MortgageContext };
