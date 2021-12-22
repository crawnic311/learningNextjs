import React from 'react'

const HomeHeader = () => {
  return (
    <div className="Site-Header-Inner">
      <div className="Header-Logo">
        <div className="Header-Logo-Inner">Foody</div>
      </div>
      <div className="Site-Nav-Wrapper">
        <nav className="Site-Nav-Inner">
          <ul className="Nav-List">
            <li className="Nav-Item" id="create">
              <span>Create</span>
            </li>
            <li className="Nav-Item" id="nutrition_calc">
              <span>Nutrition Calculator</span>
            </li>
            <li className="Nav-Item" id="about">
              <span>About</span>
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
