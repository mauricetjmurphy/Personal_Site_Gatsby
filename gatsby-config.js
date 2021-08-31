module.exports = {
  siteMetadata: {
    title: `Maurice Murphy`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Maurice Murphy`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Career`,
        link: `/career`,
      },
      {
        name: `Projects`,
        link: `/projects`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
    workEexperiance: [
      {
        companyName: `Freelance`,
        position: `Frontend web developer`,
        location: `London`,
        tasks: [
          `User Interface & User Experience Design (UI & UX)`,
          `Wireframing & Prototyping`,
          `Responsive web applications design`,
          `Development of headless CMS sites using Gatsby & GraphQL`,
          `Development of SSR web applications using React & NextJS`,
          `Design and deployment of Shopify ecommerce websites`,
          `Custom Shoify liquid theme design and modification`,
          `React frontend theme development in Shopify`,
        ],
      },
      {
        companyName: `Foster & Partners`,
        position: `Architectural Technologist`,
        location: `London`,
        tasks: [
          `Designed and delivered the project BIM Execution plan`,
          `Manged teams on large scale projects`,
          `Hosted weekly BIM coordination meetings to discuss project challenges and provide possible solutions. Developed workflows for various design stages`,
          `Identified opportunities and recommended solutions that enhanced the coordination and management processes`,
          `Developed the BIM integrated models for interdisciplinary coordination, clash detection and validation`,
          `Coordinated project teams and managed Revit model production and project content`,
          `Ensured company standards and workflows were applied and communicated to the project teams`,
        ],
      },
      {
        companyName: `Pattern Architects`,
        position: `Architectural Technologist`,
        location: `London`,
        tasks: [
          `Assisted in the production and coordination of several architectural packages`,
          `Responded to technical queries and prepared supporting documentation`,
          `Modelled and managed Revit families according to project needs`,
          `Monitored and updated product specifications`,
          `Collaborated with various disciplines to achieve BIM level 2 standard`,
          `Coordinated the project with external design consultants`,
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
