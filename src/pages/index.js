import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <AboutMe />
  </Layout>
)

export default IndexPage
