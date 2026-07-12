import React from 'react';

import RecipeTable from './components/RecipeTable';
import WeeklyMenu from './components/WeeklyMenu';

function App() {
  return (
    <div className='app-container'>
      <header className='header'>
        <h1>Vegan Meal Planner</h1>
      </header>
      <main className='main'>
        <WeeklyMenu />
        <RecipeTable />
      </main>
      <footer className='footer'>
        <p>&copy; 2026 Vegan Meal Planner</p>
      </footer>
    </div>
  );
}

export default App;