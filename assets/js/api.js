async function fetchRecipesFromAPI(query) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.meals) {
      return data.meals.map((meal) => ({
        id: meal.idMeal,
        title: meal.strMeal,
        type: meal.strCategory || "Desconhecido",
        servings: 1,
        difficulty: "1-Iniciante",
        ingredients: getingredients(meal),
        steps: meal.strInstructions.split("\n"),
        image: meal.strMealThumb,
      }));
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error fetch data from API");
    return [];
  }
}

function getIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ name: ingredient, quantity: measure });
    }
  }
  return ingredients;
}
