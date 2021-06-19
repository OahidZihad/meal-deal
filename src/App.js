import logo from "./logo.svg";
import "./App.css";
import MealDetail from "./Components/MealDetail/MealDetail";
import MealFinder from "./Components/MealFinder/MealFinder";

function App() {
  return (
    <div className="App">
      <MealDetail></MealDetail>
      <MealFinder></MealFinder>
    </div>
  );
}

export default App;
