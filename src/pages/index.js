import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import Career from "../components/Career/Career"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <AboutMe />
    <Career />
  </Layout>
)

export default IndexPage
