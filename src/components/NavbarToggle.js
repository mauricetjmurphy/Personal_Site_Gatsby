import React from "react"
import styled from "styled-components"
import "./navbarToggle.css"

const Button = styled.button`
  height: 20px;
  width: 40px;
  background: transparent;
  border: none;
`

function NavbarToggle({ collapsed, onClickMethod, className }) {
  return (
    <Button
      type="button"
      onClick={() => onClickMethod(!collapsed)}
      className="navbarToggle"
    >
      <span className={!collapsed ? "line line1" : "line"}></span>
      <span className={!collapsed ? "line line2" : "line"}></span>
    </Button>
  )
}

export default NavbarToggle
