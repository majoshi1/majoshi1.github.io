import React, { useState } from 'react';
import recipes from '../data/recipes.json';

const RecipeTable = () => {
  const recipesData: any = recipes;
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = event.currentTarget.searchTerm.value;
    const filteredRecipes = recipesData.filter((recipe: any) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredRecipes(filteredRecipes);
  };

  const linkHandler = (recipeName: string) => {
    // Open google search for the recipe name
    window.open(`https://www.google.com/search?q=${encodeURIComponent('site: purplecarrot.com ' + recipeName)}`, '_blank');
  };

  return (
    <div>
      <h2>All Recipes</h2>
      <form onSubmit={handleSearch}>
        <input type='search' name='searchTerm' placeholder='Search recipes' />
        <button type='submit'>Search</button>
      </form>
      <table style={{ display: 'block', overflowY: 'auto', height: '250px', width: '100%', whiteSpace: 'nowrap' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Time</th>
            <th>Season</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipes.map((recipe) => (
            <tr key={recipe.name}>
              <td><a href="javascript:void(0)" onClick={() => linkHandler(recipe.name)}>{recipe.name}</a></td>
              <td>{recipe.category}</td>
              <td>{recipe.time}</td>
              <td>{recipe.season}</td>
              <td>{recipe.ingredients.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeTable;