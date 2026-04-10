window.onload = async () => {
  const response = await fetch('/api/recipes');
  const recipes = await response.json();
  
  const recipesList = document.getElementById('recipes-list');
  recipesList.innerHTML = '';

  recipes.forEach(recipe => {
    const li = document.createElement('li');
    li.textContent = `${recipe.title} by ${recipe.author}`;
    recipesList.appendChild(li);
  });
};