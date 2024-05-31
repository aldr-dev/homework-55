import {FoodItem} from '../../types';
import React from 'react';

interface IngredientsProps {
  arrayIngredients: FoodItem[];
}

const BuildCollectionIngredients: React.FC<IngredientsProps> = ({arrayIngredients}) => {
  const arrayElements: React.ReactNode[] = [];
  arrayIngredients.forEach((ingredient) => {
    for (let i = 0; i < ingredient.count; i++) {
      arrayElements.unshift(
        <div key={`${ingredient.name}-${i}`} className={ingredient.name}></div>
      );
    }
  });
  return arrayElements;
};

export default BuildCollectionIngredients;