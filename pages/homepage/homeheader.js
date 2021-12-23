import React, { useState } from 'react'

const HomeHeader = () => {
  let navTo = ''

  const navigateHandler = (navTo) => {}
  return (
    <div className="Site-Header-Inner">
      <div className="Header-Logo">
        <div className="Header-Logo-Inner">Foody</div>
      </div>
      <div className="Site-Nav-Wrapper">
        <nav className="Site-Nav-Inner">
          <ul className="Nav-List">
            <li className="Nav-Item" id="recipe">
              <a href=''>Recipes</a>
            </li>
            <li className="Nav-Item" id="create">
              <a>Create</a>
            </li>
            <li className="Nav-Item" id="nutrition_calc">
              <a>Nutrition Calculator</a>
            </li>
            <li className="Nav-Item" id="about">
              <a>About</a>
            </li>
            <li className="Nav-Item" id="logout">
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HomeHeader
