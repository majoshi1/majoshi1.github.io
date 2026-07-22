import React, { useState, useEffect } from 'react';
import recipes from '../data/recipes.json';

const WeeklyMenu = () => {
  const [weeklyMenu, setWeeklyMenu] = useState([]);
  const [time, setTime] = useState('all');
  const currentSeason = getCurrentSeason();

  useEffect(() => {
    filterRecipes();
  }, [currentSeason, time]);

  const filterRecipes = () => {
    const currentSeasonRecipes = recipes.filter((recipe) => recipe.season === currentSeason || recipe.season === 'all');
    // Pick one random recipe from random categories for the weekly menu
    const categories = Array.from(new Set(currentSeasonRecipes.map((recipe) => recipe.category)));
    const catRecipes = categories.map((category) => {
      const categoryRecipes = currentSeasonRecipes.filter((recipe) => recipe.category === category);
      const timeRecipes = categoryRecipes.filter((recipe) => time === 'all' ? true : time === 'long' ? recipe.time > 30 : recipe.time <= parseInt(time));
      return timeRecipes[Math.floor(Math.random() * timeRecipes.length)];
    });
    const randomRecipes: any = catRecipes.sort(() => Math.random() - 0.5).slice(0, 5);
    setWeeklyMenu(randomRecipes);
  };

  const linkHandler = (recipeName: string) => {
    // Open google search for the recipe name
    window.open(`https://www.google.com/search?q=${encodeURIComponent('site: purplecarrot.com ' + recipeName)}`, '_blank');
  };

  return (
    <div>
      <h2>Weekly Menu for {currentSeason}</h2>
      <div>
        <label>
          <input type="radio" name="time" value="10" onChange={() => setTime('all')} checked={time === 'all'} />
          All
        </label>
        <label>
          <input type="radio" name="time" value="15" onChange={() => setTime('15')} checked={time === '15'} />
          15 min
        </label>
        <label>
          <input type="radio" name="time" value="30" onChange={() => setTime('30')} checked={time === '30'} />
          30 min
        </label>
        <label>
          <input type="radio" name="time" value="long" onChange={() => setTime('long')} checked={time === 'long'} />
          Long (30+ mins)
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Time (min)</th>
          </tr>
        </thead>
        <tbody>
          {weeklyMenu.map((recipe: any) => (
            <tr key={recipe.name}>
              <td><a href="javascript:void(0)" onClick={() => linkHandler(recipe.name)}>{recipe.name}</a></td>
              <td>{recipe.category}</td>
              <td>{recipe.time}</td>
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