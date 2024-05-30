import {useState} from 'react';
import './App.css';
import meatImage from './assets/ingredients/meat.png';
import cheeseImage from './assets/ingredients/cheese.png';
import saladImage from './assets/ingredients/salad.png';
import baconImage from './assets/ingredients/bacon.png';
import {FoodItem} from './types';
import ButtonAddIngredient from './components/ButtonAddIngredient/ButtonAddIngredient';
import AmountIngredients from './components/AmountIngredients/AmountIngredients';
import ButtonRemoveIngredient from './components/ButtonRemoveIngredient/ButtonRemoveIngredient';

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

  const amountUpdateIngredients = (name: string, change: number) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          return {
            ...ingredient,
            count: ingredient.count + change,
          };
        } else {
          return ingredient;
        }
      });
    });
  };

  const addIngredient = (name: string) => {
    amountUpdateIngredients(name, 1);
  };

  const deleteIngredient = (name: string) => {
    amountUpdateIngredients(name, - 1);
  };

  return (
    <div className="constructor-container">
      <fieldset className="ingredient-buttons">
        <legend className="constructor-name">Ingredients</legend>
        {INGREDIENTS.map((ingredient,index) => {
          return (
            <div className="build-table-ingredient" key={`ingredient-div-${index}`}>
              <ButtonAddIngredient
                key={`ingredient-${index}`}
                name={ingredient.name}
                image={ingredient.image}
                onClickIngredient={() => addIngredient(ingredient.name)}
              />
              <AmountIngredients
                key={`amount-${index}`}
                amount={ingredients[index].count}
              />
              {ingredients[index].count ?
                <ButtonRemoveIngredient
                  key={`remove-${index}`}
                  onClickButtonDelete={() => deleteIngredient(ingredient.name)}
                />
                : null}
            </div>
          );
        })}
      </fieldset>

      <fieldset className="build-burger">
        <legend className="constructor-name">Burger</legend>
      </fieldset>
    </div>
  );
};

export default App;