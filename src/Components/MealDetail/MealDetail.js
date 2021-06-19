import React, { useEffect, useState } from "react";

const MealDetail = () => {
  const [meal, setMeal] = useState({});
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  return (
    <div>
      <h1>This is mealdeal</h1>
      <h3>name: {meal.strMeal}</h3>
    </div>
  );
};

export default MealDetail;
