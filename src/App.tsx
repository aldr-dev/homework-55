import {useState} from 'react';
import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import {FoodItem} from './types';
import ButtonAddIngredient from './components/ButtonAddIngredient/ButtonAddIngredient';
import AmountIngredients from './components/AmountIngredients/AmountIngredients';
import ButtonRemoveIngredient from './components/ButtonRemoveIngredient/ButtonRemoveIngredient';
import BuildCollectionIngredients from './components/BuildCollectionIngredients/BuildCollectionIngredients';

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
  const [ingredients, setIngredients] = useState<FoodItem[]>([
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
    amountUpdateIngredients(name, -1);
  };

  const totalIngredientPrice = () => {
    return ingredients.reduce((acc, ingredient) => {
      const ingredientFind = INGREDIENTS.find((element) => element.name === ingredient.name);
      return acc + (ingredientFind ? ingredientFind.price * ingredient.count : 0);
    }, 30);
  };

  return (
    <div className="constructor-container">
      <fieldset className="ingredient-buttons">
        <legend className="constructor-name">Ingredients</legend>
        {INGREDIENTS.map((ingredient, index) => {
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
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          <BuildCollectionIngredients arrayIngredients={ingredients}/>
          <div className="BreadBottom"></div>
        </div>
        <strong className="total-price-count">{`Price: ${totalIngredientPrice()}`}</strong>
      </fieldset>
    </div>
  );
};

export default App;