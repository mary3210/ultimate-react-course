import { useState } from "react";


const seedData = [
  {
    time: "Morning",
    mealName: "Parfait",
    ingredients: "Greek Yogurt, one apple, honey",
    calories: 300
  }
];

function App() {
  const [meals, setMeals] = useState([...seedData])
  const [show, setShow] = useState(false)

  function handleAddMeal(meal) {
    setMeals((meals) => [...meals, meal])

  }

  function handleDeleteMeal(mealId) {
    console.log(meals[mealId])
    if (meals[mealId]) {

      let potato = meals.toSpliced(mealId, 1)
      console.log(potato)
      setMeals((meals) => potato)
    }

  }

  function handleShow() {
    setShow(() => !show)
  }

  return (
    <div className="App">
      <div className="header">
        <h1>My Meals Today</h1>
      </div>
      <div className="contents">
        <div>
          <MealList meals={meals} handleDeleteMeal={handleDeleteMeal} />
        </div>
        <div>
          {show ?
            <AddMeal handleAddMeal={handleAddMeal} handleShow={handleShow} /> : <button className="addMealBtn" onClick={handleShow}>ADD MEAL</button>}
        </div>

      </div>
      <TotalCalories meals={meals} />
    </div>

  );
}

function MealList({ meals, handleDeleteMeal }) {


  return (
    <div >
      <Meal meals={meals} handleDeleteMeal={handleDeleteMeal} />

    </div>

  )
}

function Meal({ meals, handleDeleteMeal }) {


  return (
    <div>

      {meals && meals.map((meal, idx) =>
        <div className="indivMeal" key={idx}>

          <p>This {meal.time},</p>
          <p>I ate {meal.mealName}.</p>
          <p>Ingredients: {meal.ingredients}</p>
          <p>Calories: {meal.calories}</p>
          <button onClick={() => handleDeleteMeal(idx)}>delete</button>
        </div>)}
    </div>
  )
}

function AddMeal({ handleAddMeal, handleShow }) {
  const [time, setTime] = useState("morning")
  const [mealName, setMealName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [calories, setCalories] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    const meal = {
      time,
      mealName,
      ingredients,
      calories
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

  function handleCalories(e) {
    setCalories(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mealForm">
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
        <div>
          <label>Calories</label>
          <input type="text" value={calories} onChange={handleCalories}></input>
        </div>
        <button>Submit</button>

      </form>
      <button onClick={handleShow}>Cancel</button>
    </>
  )
}



/// NEED TO FIX HERE 
function TotalCalories({ meals }) {
  const [calorieNum, setCalorieNum] = useState(0);
  let temp = 0;
  function calculate() {




    meals.map((meal, idx) => temp += meal.calories)



  }
  calculate();
  // console.log(temp)
  // setCalorieNum((prevNum) => temp)

  return (
    <div>
      <h2>Total amount of calories ate today: {calorieNum} </h2>

    </div>
  )
}

export default App;
