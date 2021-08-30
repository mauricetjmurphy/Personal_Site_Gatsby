import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
// import { FaReact } from "react-icons/fa"

const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 70%;
  height: 900px;
`

function AboutMe() {
  return (
    <AboutMeContainer>
      <div>
        <div>
          <div>
            <span>01.</span>
            <h1>About Me</h1>
            <span></span>
          </div>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
            <br></br>
            Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
            <br></br>I also recently launched a course that covers everything
            you need to build a web app with the Spotify API using Node & React.
            <br></br>
            Here are a few technologies I've been working with recently:
          </p>
          <div>
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div>
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <StaticImage
          src="../images/profile.jpg"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
        />
      </div>
    </AboutMeContainer>
  )
}

export default AboutMe
