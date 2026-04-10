const recipes = [
  {
    id: "r1",
    title: "Spaghetti Bolognese",
    author: "Chef Mario",
    year: 2020,
    genre: "Italian",
    summary: "A classic Italian pasta dish with rich meat sauce."
  },
  {
    id: "r2",
    title: "Chocolate Cake",
    author: "Chef Anna",
    year: 2019,
    genre: "Dessert",
    summary: "A moist chocolate cake with creamy frosting."
  },
  {
    id: "r3",
    title: "Caesar Salad",
    author: "Chef John",
    year: 2021,
    genre: "Salad",
    summary: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan."
  },
  {
    id: "r4",
    title: "Chicken Curry",
    author: "Chef Priya",
    year: 2022,
    genre: "Indian",
    summary: "A flavorful chicken curry with aromatic spices."
  },
  {
    id: "r5",
    title: "Veggie Stir Fry",
    author: "Chef Lee",
    year: 2021,
    genre: "Asian",
    summary: "Fresh vegetables stir-fried with a savory sauce."
  }
];

function getAllRecipes() {
  return recipes;
}

function getRecipeById(id) {
  return recipes.find(recipe => recipe.id === id);
}

module.exports = {
  getAllRecipes,
  getRecipeById
};