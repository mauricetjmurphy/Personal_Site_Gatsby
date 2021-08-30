import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.div`
  display: flex;
  height: 100px;
  padding: 0 50px;
`

const NavBrand = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
  margin: "0",
  padding: "0 20px",
}

function Navbar({ menuLinks }) {
  return (
    <Nav>
      <NavBrand>
        <Link style={linkStyle} to="/">
          Brand
        </Link>
      </NavBrand>
      <NavLinks>
        {menuLinks.map((link, i) => (
          <li key={i}>
            <Link to={link.link} style={linkStyle}>
              {link.name}
            </Link>
          </li>
        ))}
      </NavLinks>
    </Nav>
  )
}

export default Navbar
