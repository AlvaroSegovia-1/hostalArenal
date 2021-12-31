import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { css } from "@emotion/react"

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          gatsbyImageData(width: 1000)
        }
      }
    }
  }
`

const HabitacionTemplate = ({
  data: {
    allDatoCmsHabitacion: { nodes },
  },
}) => {
  const { titulo, contenido } = nodes[0]

  const imagen = getImage(nodes[0].imagen.gatsbyImageData)

  console.log(nodes)

  return (
    <Layout>
      <main
        css={css`
          margin: 10px auto;
          max-width: 1200px;
          width: 90%;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >
          {titulo}
        </h1>
        <p>{contenido}</p>
        <GatsbyImage
          image={imagen}
          alt="imagen"
          css={css`
            //border-radius: 1.4rem;
            //border: black 3px solid;
            width: 100%;
            
          `}
        />
      </main>
    </Layout>
  )
}

export default HabitacionTemplate
