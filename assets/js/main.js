document.addEventListener("DOMContentLoaded", () => {
  renderRecipeList(localRecipes);

  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", async () => {
    const query = searchInput.value.trim();
    if (!query) return;

    const results = await fetchRecipesFromAPI(query);

    if (results.length > 0) {
      renderRecipeList(results);
    } else {
      const card = document.getElementById("recipeCard");
      card.innerHTML = "<p>Nenhuma receita encontrada</p>";
      document.getElementById("recipeList").innerHTML = "";
    }
  });
});
