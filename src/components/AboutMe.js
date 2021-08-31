import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "./about-me.css"

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

const AboutMeContainer = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 800px;
`

const TextContainer = styled.div`
  width: 50%;
  padding-right: 25px;
`

const ImageContainer = styled.div`
  width: 50%;
  padding-left: 50px;
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
  width: 160px;
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

const MainText = styled.p`
  font-size: 20px;
  color: var(--slate);
`

const Technologies = styled.div`
  width: 100%;
`

const techItemContainer = {
  display: "flex",
  alignItems: "center",
  padding: "7.5px 0",
}

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
      <AboutMeContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextContainer>
            <div>
              <TitleContainer>
                <TitleNum>01.</TitleNum>
                <TitleText>About Me</TitleText>
                <TitleLine></TitleLine>
              </TitleContainer>
              <MainText>
                Hello! My name is Maurice and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
                <br></br>
                <br></br>
                Fast-forward to today, and I've had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
                <br></br>
                <br></br>
                Here are a few technologies I've been working with recently:
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
              height={400}
            />
          </ImageContainer>
        </div>
        <Technologies>
          <div style={{ display: "flex" }}>
            <div style={{ width: "25%" }}>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiJavascript style={icon} />
                </span>
                <span>JavaScript ES6</span>
              </div>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiTypescript style={icon} />
                </span>
                <span>TypeScript</span>
              </div>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <FaReact style={icon} />
                </span>
                <span>React</span>
              </div>
            </div>
            <div style={{ width: "25%" }}>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiGatsby style={icon} />
                </span>
                <span>Gatsby</span>
              </div>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiGraphql style={icon} />
                </span>
                <span>GraphQL</span>
              </div>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiNextDotJs style={icon} />
                </span>
                <span>NextJS</span>
              </div>
            </div>

            <div style={{ width: "25%" }}>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiPython style={icon} />
                </span>
                <span>Pyhton</span>
              </div>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiDjango style={icon} />
                </span>
                <span>Django</span>
              </div>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiFlask style={icon} />
                </span>
                <span>Flask</span>
              </div>
            </div>
            <div style={{ width: "25%" }}>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiMongodb style={icon} />
                </span>
                <span>MongoDB</span>
              </div>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiPostgresql style={icon} />
                </span>
                <span>PostgreSQL</span>
              </div>
              <div style={techItemContainer}>
                <span style={techIconContainer}>
                  <SiDocker style={icon} />
                </span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </Technologies>
      </AboutMeContainer>
    </>
  )
}

export default AboutMe
