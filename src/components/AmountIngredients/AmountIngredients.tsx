import React from 'react';
import './AmountIngredients.css';

interface AmountProps {
  amount: number;
}
const AmountIngredients: React.FC<AmountProps> = ({amount}) => {
  return (
    <strong className="amount-value">x<span>{amount}</span></strong>
  );
};

export default AmountIngredients;