import React from "react"
import { Link } from "gatsby"
import { VscGithub } from "react-icons/vsc"
import { RiLinkedinFill } from "react-icons/ri"
import { FaTwitter, FaInstagram } from "react-icons/fa"
import styled from "styled-components"
import "./social-strip.css"

const SocialStripContainer = styled.div`
  position: fixed;
  height: 280px;
  left: 5%;
  bottom: 0;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
`

const strip = {
  display: "flex",
  justtifyContent: "center",
  padding: "0",
  margin: "20px  auto",
  width: "2px",
  height: "40%",
  background: "var(--slate)",
  zIndex: "5",
}

function SocialStrip() {
  return (
    <SocialStripContainer>
      <IconContainer>
        <Link style={{ color: "var(--slate" }} to="/">
          <VscGithub />
        </Link>
        <Link style={{ color: "var(--slate" }} to="/">
          <FaInstagram />
        </Link>
        <Link style={{ color: "var(--slate" }} to="/">
          <RiLinkedinFill />
        </Link>
        <Link style={{ color: "var(--slate" }} to="/">
          <FaTwitter />
        </Link>
      </IconContainer>
      <span style={strip}></span>
    </SocialStripContainer>
  )
}

export default SocialStrip
