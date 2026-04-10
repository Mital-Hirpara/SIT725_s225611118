const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipeById } = require('../services/recipe.service');

router.get('/recipes', (req, res) => {
  res.json(getAllRecipes());
});

router.get('/recipes/:id', (req, res) => {
  const recipe = getRecipeById(req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ message: "Recipe not found" });
  }
});

module.exports = router;