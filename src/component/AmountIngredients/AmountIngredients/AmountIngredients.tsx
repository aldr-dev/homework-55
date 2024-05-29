import React from 'react';

interface AmountProps {
  amount: number;
}
const AmountIngredients: React.FC<AmountProps> = ({amount}) => {
  return (
    <span>x<span>{amount}</span></span>
  );
};

export default AmountIngredients;