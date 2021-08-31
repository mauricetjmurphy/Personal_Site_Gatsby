import React, { useState } from "react"
import styled from "styled-components"
import "./career-side-menu.css"

const MainContainer = styled.div``

const CareerItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  z-index: 5;
`

function CareerSideMenu() {
  return (
    <MainContainer>
      <CareerItemContainer className="active">
        <span>Freelance</span>
      </CareerItemContainer>
      <CareerItemContainer className="not-active">
        <span>Foster & Partners</span>
      </CareerItemContainer>
      <CareerItemContainer className="not-active">
        <span>Pattern Architects</span>
      </CareerItemContainer>
    </MainContainer>
  )
}

export default CareerSideMenu
