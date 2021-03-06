import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Title from "./Title"
import { FaReact } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiGatsby,
  SiGraphql,
  SiNextDotJs,
  SiPython,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiDocker,
} from "react-icons/si"

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 100px 0px;
  max-width: 900px;

  .gatsby-image-wrapper {
    margin: 0 auto !important;
    width: inherit !important;
    height: inherit !important;
  }

  @media (max-width: 768px) {
    max-width: 700px;
  }

  @media (max-width: 480px) {
    padding: 50px 0;
    margin: 0 5%;
  }
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
  }
`

const TextContainer = styled.div`
  width: 50%;
  padding-right: 25px;

  @media (max-width: 480px) {
    width: 90%;
    margin: 0 auto;
    padding: 0;
  }
`

const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  padding-left: 120px;

  @media (max-width: 768px) {
    padding: 0;
    margin: 20px 0 0 20px;
    height: 250px;
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
    padding: 20px 0;
    margin: 0 auto;
  }

  img {
    border-radius: 5px;

    @media (max-width: 768px) {
      padding: 0;
    }

    @media (max-width: 480px) {
      padding: 0;
      margin: 0 auto;
    }
  }
`

const MainText = styled.p`
  font-size: 20px;
  color: var(--slate);

  @media (max-width: 480px) {
    font-size: 18px;
    letter-spacing: 0.5px;
  }
`

const Technologies = styled.div`
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;

  p {
    color: var(--slate);
    text-align: center;
    width: 90%;
    margin: 20px auto;
    padding-top: 30px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    text-align: center;
  }

  span {
    color: var(--slate);
    font-size: 14px;
    font-family: sfmono;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
    @media (max-width: 480px) {
      justify-content: center;
      text-align: center;
    }
    @media (max-width: 350px) {
      font-size: 12px;
    }
  }
`

const TechItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    min-height: 90px;
  }

  span {
    @media (max-width: 768px) {
      padding-top: 5px;
    }
  }
`

const techIconContainer = {
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
}

const icon = {
  color: "var(--green)",
}

function AboutMe() {
  return (
    <>
      <AboutMeContainer id="about">
        <Title number={"00."} title={"About Me"} />
        <MainContainer>
          <TextContainer>
            <div>
              <MainText>
                Hello! My name is Maurice and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes ??? turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
                <br></br>
                <br></br>
                Fast-forward to today, and I've had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </MainText>
            </div>
          </TextContainer>
          <ImageContainer>
            <StaticImage
              src="../images/profile_greyscale.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fixed"
              width={300}
              height={300}
            />
          </ImageContainer>
        </MainContainer>
        <Technologies>
          <p>Here are a few technologies I've been working with recently:</p>
          <div style={{ display: "flex" }}>
            <div style={{ width: "25%" }}>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiJavascript style={icon} />
                </span>
                <span>JavaScript ES6</span>
              </TechItemContainer>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiTypescript style={icon} />
                </span>
                <span>TypeScript</span>
              </TechItemContainer>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <FaReact style={icon} />
                </span>
                <span>React</span>
              </TechItemContainer>
            </div>
            <div style={{ width: "25%" }}>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiGatsby style={icon} />
                </span>
                <span>Gatsby</span>
              </TechItemContainer>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiGraphql style={icon} />
                </span>
                <span>GraphQL</span>
              </TechItemContainer>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiNextDotJs style={icon} />
                </span>
                <span>NextJS</span>
              </TechItemContainer>
            </div>

            <div style={{ width: "25%" }}>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiPython style={icon} />
                </span>
                <span>Pyhton</span>
              </TechItemContainer>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiDjango style={icon} />
                </span>
                <span>Django</span>
              </TechItemContainer>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiFlask style={icon} />
                </span>
                <span>Flask</span>
              </TechItemContainer>
            </div>
            <div style={{ width: "25%" }}>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiMongodb style={icon} />
                </span>
                <span>MongoDB</span>
              </TechItemContainer>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiPostgresql style={icon} />
                </span>
                <span>PostgreSQL</span>
              </TechItemContainer>
              <TechItemContainer>
                <span style={techIconContainer}>
                  <SiDocker style={icon} />
                </span>
                <span>Docker</span>
              </TechItemContainer>
            </div>
          </div>
        </Technologies>
      </AboutMeContainer>
    </>
  )
}

export default AboutMe
