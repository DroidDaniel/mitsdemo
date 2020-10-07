import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Speech from '../components/Talks/Speech'




const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Herosection img={data.img.childImageSharp.fluid} title="Hexnode" subtitle="Mitsogo" heroclass="hero-background"/>
    <Infoblock heading="About Us"/>
    <Speech wepinars={data.wepinars}/>
    <Dualinfoblock heading="Our Team"/>

  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "hexnode-webinars.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    wepinars:allContentfulWepinars{
      totalCount
      edges {
        node {
          id
          title
          category
          description{
            description
          }
          image{
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }


}
`

export default IndexPage
