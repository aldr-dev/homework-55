import React from 'react';

interface ButtonProps {
  name: string;
  image: string;
  onClickIngredient: () => void;
}

const ButtonAddIngredient: React.FC<ButtonProps> = ({name, image, onClickIngredient}) => {
  return (
    <div onClick={onClickIngredient} className="button-ingredient">
      <img className="img-ingredient" src={image} alt={name}/>
      <span className="name-ingredient">{name}</span>
    </div>
  );
};

export default ButtonAddIngredient;