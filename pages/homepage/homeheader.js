import React from 'react'

const HomeHeader = () => {
  return (
    <div className="Site-Header-Inner">
      <div className="Header-Logo">
        <div className="Site-Nave-Wrapper">
          <nav className="Site-Nav-Inner">
            <ul className="Nav-List">
              <li className="Nav-Item" id="create"></li>
              <li className="Nav-Item" id="nutrition_calc"></li>
              <li className="Nav-Item" id="about"></li>
              <li className="Nav-Item" id="logout"></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
