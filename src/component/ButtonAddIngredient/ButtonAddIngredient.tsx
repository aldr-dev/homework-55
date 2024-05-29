import React from 'react';
import './ButtonAddIngredient.css';

interface ButtonProps {
  name: string;
  image: string;
  onClickIngredient: () => void;
}

const ButtonAddIngredient: React.FC<ButtonProps> = ({name, image, onClickIngredient}) => {
  return (
    <div onClick={() => onClickIngredient()} className="button-ingredient">
      <img className="img-ingredient" src={image} alt={name}/>
      <strong className="name-ingredient">{name}</strong>
    </div>
  );
};

export default ButtonAddIngredient;