// controllers/recipe.controller.js

const addOwnRecipe = require("./recipes/addOwnRecipe");
const getCategory = require("./recipes/getCategory");
const getIngredientsList = require("./recipes/getIngredientsList");
const getMainrecipesByCategory = require("./recipes/getMainrecipesByCategory");
const getOwnRecipes = require("./recipes/getOwnRecipes");
const getRecipesByCategory = require("./recipes/getRecipesByCategory");
const searchRecipe = require("./recipes/searchRecipe");
const getRecipeById = require("./recipes/getRecipeById");
const getRecipeByIngredients = require("./recipes/getRecipeByIngredients");
const deleteOwnRecipe = require("./recipes/deleteOwnRecipe");
const addFavoriteRecipe = require("./favouriteRecipes/addFavoriteRecipe");
const getFavoriteRecipes = require("./favouriteRecipes/getFavoriteRecipes");
const removeFavoriteRecipe = require("./favouriteRecipes/removeFavoriteRecipe");
const getPopularRecipes = require("./recipes/getPopularRecipes");

module.exports = {
  addOwnRecipe,
  getCategory,
  getIngredientsList,
  getMainrecipesByCategory,
  getOwnRecipes,
  getRecipesByCategory,
  searchRecipe,
  getRecipeById,
  getRecipeByIngredients,
  deleteOwnRecipe,
  addFavoriteRecipe,
  getFavoriteRecipes,
  removeFavoriteRecipe,
  getPopularRecipes,
};
