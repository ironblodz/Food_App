function renderRecipeList(recipes) {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  recipes.forEach((recipe) => {
    const div = document.createElement("div");
    div.className = "recipe-title";
    div.textContent = recipe.title;
    div.addEventListener("click", () => renderRecipeCard(recipe));
    recipeList.appendChild(div);
  });
}

function renderRecipeCard(recipe) {
  const card = document.getElementById("recipeCard");
  if (!recipe) return;

  card.innerHTML = `
    <div class="card-inner">
      <h2 class="recipe-title">${recipe.title}</h2>
      <p><strong>Tipo:</strong> ${recipe.type}</p>
      <p><strong>Serve:</strong> ${recipe.servings} pessoa(s)</p>
      <p><strong>Dificuldade:</strong> ${recipe.difficulty}</p>
      <h3>Ingredientes:</h3>
      <ul class="ingredients-list">
        ${recipe.ingredients
          ?.map((ing) => `<li>${ing.quantity} de ${ing.name}</li>`)
          .join("")}
      </ul>
      <h3>Modo de preparo:</h3>
      <ol class="steps-list">
        ${recipe.steps?.map((step) => `<li>${step}</li>`).join("")}
      </ol>
      ${
        recipe.image
          ? `<img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">`
          : ""
      }
    </div>
  `;
}
