import React from "react"
import styled from "styled-components"
import CareerInfo from "./CareerInfo"
import CareerSideMenu from "./CareerSideMenu"

const CareerContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 700px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding-bottom: 40px;
`

const TitleNum = styled.span`
  font-size: 26px;
  line-height: 32px;
  width: 60px;
  padding-bottom: 6px;
  padding-right: 10px;
  align-items: center;
  font-family: sfmono;
  color: var(--green);
`

const TitleText = styled.h1`
  font-size: 32px;
  width: 320px;
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  margin: 0;
  padding: 0;
`

const TitleLine = styled.span`
  height: 1px;
  width: calc(100% - 205px);
  margin-left: 15px;
  background: var(--slate);
`

function Career() {
  return (
    <CareerContainer>
      <TitleContainer>
        <TitleNum>02.</TitleNum>
        <TitleText>Work Experiance</TitleText>
        <TitleLine></TitleLine>
      </TitleContainer>
      <div style={{ display: "flex" }}>
        <CareerSideMenu />
        <CareerInfo />
      </div>
    </CareerContainer>
  )
}

export default Career
