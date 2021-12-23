import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="" alt="" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/recipes" activeStyle>
            Recipes
          </NavLink>
          <NavLink to="/create" activeStyle>
            Create
          </NavLink>
          <NavLink to="/nutritionCalculator" activeStyle>
            Nutrition Calculator
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
