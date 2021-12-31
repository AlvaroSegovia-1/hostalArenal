import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

export const ContenidoInicio = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "Inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)

  //console.log(informacion.allDatoCmsPagina.nodes[0])

  const { titulo, contenido } = informacion.allDatoCmsPagina.nodes[0]

  const imainicio = getImage(
    informacion.allDatoCmsPagina.nodes[0].imagen.gatsbyImageData
  )
  //console.log(imainicio)
  //console.log(imagen.fluid.src)

  /* <StaticImage
  src="https://www.datocms-assets.com/60107/1640022182-1.jpg?auto=format"
  alt="habitacion"
/> */

  return (
    <>
      <h2
        css={css`
          text-align: center;
          fon-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoInicio>
        <p>{contenido}</p>

        <GatsbyImage
          image={imainicio}
          alt="imagen"
          css={css`
            border-radius: 1.4rem;
            border: black 3px solid;
          `}
        />
      </TextoInicio>
    </>
  )
}


  

