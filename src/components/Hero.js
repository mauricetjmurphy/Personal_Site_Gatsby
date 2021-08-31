import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import "./hero.css"

const HeroContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  margin: 0 100px;
`

const linkItem = {
  height: "50px",
}

const Hero = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <HeroContainer>
      <h2>Hi, my name is</h2>
      <h1>Maurice Murphy.</h1>
      <p className="personal-statement">I develop things for the web.</p>
      <p className="personal-description">
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products that everybody can use.
      </p>

      <span style={{ marginTop: "20px" }}>
        <Link style={linkItem} to="/">
          <StaticImage
            src="../images/down-arrow.svg"
            width={40}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
        </Link>
      </span>
    </HeroContainer>
  )
}

export default Hero
