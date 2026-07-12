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
      <form onSubmit={handleSearch}>
        <input type='search' name='searchTerm' placeholder='Search recipes' />
        <button type='submit'>Search</button>
      </form>
      <table style={{ display: 'block', overflowY: 'auto', height: '300px', width: '100%', whiteSpace: 'nowrap' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Season</th>
            <th>Ingredients</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipes.map((recipe) => (
            <tr key={recipe.name}>
              <td>{recipe.name}</td>
              <td>{recipe.category}</td>
              <td>{recipe.season}</td>
              <td>{recipe.ingredients.join(', ')}</td>
              <td><a href={'/#'} target='_blank' rel='noopener noreferrer' onClick={() => linkHandler(recipe.name)}>View Recipe</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeTable;