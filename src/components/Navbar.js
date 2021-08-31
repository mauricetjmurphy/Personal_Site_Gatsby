import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import NavbarToggle from "./NavbarToggle"
import "./navbar.css"

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 80px;
  background: #0a192f;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

const NavBrand = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`
const brandLink = {
  display: "flex",
  textDecoration: "none",
  margin: "0",
  padding: "0",
  fontSize: "13px",
  color: "var(--green)",
}

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: sfmono;

  @media (max-width: 768px) {
    display: none;
  }
`

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  margin: "0",
  padding: "0 20px",
  fontSize: "13px",
  color: "#ccd6f6",
}

const linkNum = {
  margin: "0",
  padding: "0 5px 0 0",
  color: "var(--green)",
}

const linkText = {
  margin: "0",
  padding: "0",
}

const Button = styled.button`
  border: 1px solid var(--green);
  background: var(--navy);
  color: var(--green);
  font-size: 13px;
  padding: 4px 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #64ffda24;
  }
`

function Navbar({ menuLinks }) {
  const [mobileNavbarCollapsed, setMobileNavbarCollapsed] = useState(false)

  return (
    <Nav>
      <NavBrand>
        <Link style={brandLink} to="/">
          <StaticImage
            src="../images/logo.svg"
            width={50}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
        </Link>
      </NavBrand>
      <NavLinks>
        {menuLinks.map((link, i) => (
          <linkItem key={i}>
            <Link to={link.link} style={linkStyle}>
              <p style={linkNum}>0{i}.</p>
              <p style={linkText}>{link.name}</p>
            </Link>
          </linkItem>
        ))}
        <Button>Resume</Button>
      </NavLinks>
      <NavbarToggle
        onClickMethod={setMobileNavbarCollapsed}
        collapsed={mobileNavbarCollapsed}
      />
    </Nav>
  )
}

export default Navbar
