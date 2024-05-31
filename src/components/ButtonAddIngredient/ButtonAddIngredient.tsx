import React from 'react';
import './ButtonAddIngredient.css';

interface ButtonProps {
  name: string;
  image: string;
  onClickIngredient: () => void;
}

const ButtonAddIngredient: React.FC<ButtonProps> = ({name, image, onClickIngredient}) => {
  return (
    <button type="button" onClick={onClickIngredient} className="button-ingredient">
      <img className="img-ingredient" src={image} alt={name}/>
      <strong className="name-ingredient">{name}</strong>
    </button>
  );
};

export default ButtonAddIngredient;