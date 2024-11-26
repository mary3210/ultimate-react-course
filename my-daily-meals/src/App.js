import { useState } from "react";

const seedData = [
  {
    time: "Morning",
    mealName: "Parfait",
    ingredients: "Greek Yogurt, one apple, honey"
  }
];

function App() {
  const [meals, setMeals] = useState(seedData)
  return (
    <div className="App">
      <MealList meals={meals} />
      <AddMeal />
    </div>

  );
}

function MealList({ meals }) {

  return (
    <div>
      <Meal meals={meals} />

    </div>

  )
}

function Meal({ meals }) {
  console.log(meals)
  return (
    <div>
      {meals.map((meal) =>
        <div>
          <p>Time: {meal.time}</p>
          <p>Name of Meal: {meal.mealName}</p>
          <p>Ingredients: {meal.ingredients}</p>

        </div>)}
    </div>
  )
}

function AddMeal() {
  return (
    <form>
      <div>
        <label>Meal Time</label>
        <select>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="Evening">Evening</option>

        </select>
      </div>
      <div>
        <label>Meal Name</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Ingredients</label>
        <textarea size="300" type="text"></textarea>
      </div>
    </form>
  )
}

export default App;
