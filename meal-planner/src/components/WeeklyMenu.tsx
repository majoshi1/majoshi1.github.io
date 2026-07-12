import React, { useState, useEffect } from 'react';
import recipes from '../data/recipes.json';

const WeeklyMenu = () => {
  const [weeklyMenu, setWeeklyMenu] = useState([]);
  const currentSeason = getCurrentSeason();

  useEffect(() => {
    const currentSeasonRecipes = recipes.filter((recipe) => recipe.season === currentSeason || recipe.season === 'all');
    // Pick one random recipe from random categories for the weekly menu
    const categories = Array.from(new Set(currentSeasonRecipes.map((recipe) => recipe.category)));
    const catRecipes = categories.map((category) => {
      const categoryRecipes = currentSeasonRecipes.filter((recipe) => recipe.category === category);
      return categoryRecipes[Math.floor(Math.random() * categoryRecipes.length)];
    });
    const randomRecipes: any = catRecipes.sort(() => Math.random() - 0.5).slice(0, 5);
    setWeeklyMenu(randomRecipes);
  }, [currentSeason]);

  const linkHandler = (recipeName: string) => {
    // Open google search for the recipe name
    window.open(`https://www.google.com/search?q=${encodeURIComponent('site: purplecarrot.com ' + recipeName)}`, '_blank');
  };

  return (
    <div>
      <h2>Weekly Menu for {currentSeason}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {weeklyMenu.map((recipe: any) => (
            <tr key={recipe.name}>
              <td><a href={'/#'} target='_blank' rel='noopener noreferrer' onClick={() => linkHandler(recipe.name)}>{recipe.name}</a></td>
              <td>{recipe.category}</td>
              <td>{recipe.ingredients.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getCurrentSeason = () => {
  const date = new Date();
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
};

export default WeeklyMenu;