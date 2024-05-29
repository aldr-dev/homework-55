import {useState} from 'react';
import './App.css';
import meatImage from './assets/ingredients/meat.png';
import cheeseImage from './assets/ingredients/cheese.png';
import saladImage from './assets/ingredients/salad.png';
import baconImage from './assets/ingredients/bacon.png';
import ButtonAddIngredient from './component/ButtonAddIngredient/ButtonAddIngredient';
import {FoodItem} from './types';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

const App = () => {
  const [ingredients,setIngredients] = useState<FoodItem[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const click = () => {
    console.log('click');
  };


  return (
    <div className="constructor-container">
      <fieldset className="ingredient-buttons">
        <legend className="constructor-name">Ingredients</legend>
          {INGREDIENTS.map((ingredient) => (
            <ButtonAddIngredient
              key={ingredient.name}
              name={ingredient.name}
              image={ingredient.image}
              onClickIngredient={click} />
          ))}
      </fieldset>

      <fieldset className="build-burger">
        <legend className="constructor-name">Burger</legend>
      </fieldset>
    </div>
  );
};

export default App;