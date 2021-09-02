import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  text-align: center;
  height: 50px;
  color: var(--slate);
  font-family: sfmono;
  font-size: 12px;
`

function Footer() {
  return <FooterContainer>Copyright © Maurice Murphy 2021</FooterContainer>
}

export default Footer
