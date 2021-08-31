import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import data from "./careerData"
import { VscDebugBreakpointData } from "react-icons/vsc"

const CareerInfoContainer = styled.div`
  margin: 0 0 0 50px;
`
const SecondaryTitle = styled.p`
  color: var(--slate);
  font-size: 14px;
  font-family: sfmono;
`

const Task = styled.li`
  display: flex;
  align-items: center;
  line-height: 20px;
  color: var(--slate);
  list-style-type: none;
`

const linkItem = {
  color: "var(--green)",
}

function CareerInfo() {
  return (
    <CareerInfoContainer>
      <h1 style={{ fontSize: "26px" }}>
        {data[0].position}
        <Link style={linkItem}> @ {data[0].companyName}</Link>
      </h1>
      <SecondaryTitle>
        {data[0].location} | {data[0].dates}
      </SecondaryTitle>
      <ul>
        {data[0].tasks.map((el, i) => (
          <Task key={i}>
            <VscDebugBreakpointData
              style={{
                color: "var(--green)",
                paddingBottom: "4px",
              }}
            />
            <p style={{ marginLeft: "10px" }}>{el}</p>
          </Task>
        ))}
      </ul>
    </CareerInfoContainer>
  )
}

export default CareerInfo
