import React from 'react';

import RecipeTable from './components/RecipeTable';
import WeeklyMenu from './components/WeeklyMenu';

function App() {
  return (
    <div className='app-container'>
      <header className='header'>
        <h1>Vegan Food Recipes</h1>
      </header>
      <main className='main'>
        <RecipeTable />
        <WeeklyMenu />
      </main>
      <footer className='footer'>
        <p>&copy; 2026 Vegan Food Recipes</p>
      </footer>
    </div>
  );
}

export default App;