import { useState } from "react";

const seedData = [
  {
    time: "Morning",
    mealName: "Parfait",
    ingredients: "Greek Yogurt, one apple, honey"
  }
];

function App() {
  return (
    <div className="App">
      <MealList />
    </div>
  );
}

function MealList() {
  console.log(seedData)
  return (
    <div>
      <p> </p>
      <p>{seedData[0].time}</p>
    </div>

  )
}



export default App;
