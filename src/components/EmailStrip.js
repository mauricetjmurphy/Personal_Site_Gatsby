import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./email-strip.css"

const EmailStripContainer = styled.div`
  position: fixed;
  height: 280px;
  right: 5%;
  bottom: 0;
`
const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  color: var(--purple);
`

const strip = {
  display: "flex",
  justtifyContent: "center",
  padding: "0",
  margin: "20px  auto",
  width: "2px",
  height: "40%",
  background: "var(--purple)",
  zIndex: "5",
}

function EmailStrip() {
  return (
    <EmailStripContainer>
      <EmailContainer>
        <Link to="/">
          <p
            style={{
              writingMode: "vertical-rl",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            mauricetjmurphy@gmail.com
          </p>
        </Link>
      </EmailContainer>
      <span style={strip}></span>
    </EmailStripContainer>
  )
}

export default EmailStrip
