import { useState } from "react";

const seedData = [
  {
    time: "Morning",
    mealName: "Parfait",
    ingredients: "Greek Yogurt, one apple, honey"
  }
];

function App() {
  const [meals, setMeals] = useState([...seedData])
  const [show, setShow] = useState(false)

  function handleAddMeal(meal) {
    setMeals((meals) => [...meals, meal])
    console.log(meals)
  }

  function handleShow() {
    setShow(() => !show)
  }

  return (
    <div className="App">
      <h1>My Meals Today</h1>
      <MealList meals={meals} />
      {show ?
        <AddMeal handleAddMeal={handleAddMeal} handleShow={handleShow} /> : <button onClick={handleShow}>ADD MEAL</button>}
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

function AddMeal({ handleAddMeal, handleShow }) {
  const [time, setTime] = useState("morning")
  const [mealName, setMealName] = useState("")
  const [ingredients, setIngredients] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    const meal = {
      time,
      mealName,
      ingredients
    };

    handleAddMeal(meal)

    setTime("")
    setMealName("")
    setIngredients("")
    handleShow()
  };

  function handleMealTime(e) {
    setTime(e.target.value)
  };

  function handleMealName(e) {
    setMealName(e.target.value)
  };

  function handleIngredients(e) {
    setIngredients(e.target.value)

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Meal Time</label>
          <select onChange={handleMealTime} value={time}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="Evening">Evening</option>

          </select>
        </div>
        <div>
          <label>Meal Name</label>
          <input type="text" value={mealName} onChange={handleMealName}></input>
        </div>
        <div>
          <label>Ingredients</label>
          <textarea size="300" type="text" value={ingredients} onChange={handleIngredients}></textarea>
        </div>
        <button>Submit</button>

      </form>
      <button onClick={handleShow}>Cancel</button>
    </>
  )
}

export default App;
