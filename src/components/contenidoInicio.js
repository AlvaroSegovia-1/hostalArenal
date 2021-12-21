import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
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
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  console.log(informacion.allDatoCmsPagina.nodes[0])

  const { titulo, contenido } = informacion.allDatoCmsPagina.nodes[0]

  //console.log(imagen.fluid.src)

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
        <StaticImage
          src="https://www.datocms-assets.com/60107/1640022182-1.jpg?auto=format"
          alt="habitacion"
          css={css`
            /* border-radius: 1.4rem; */
            /* border: black 2px solid; */
          `}
        />
        {/* <img src={imagen.fluid.src} alt="habitacion" /> */}
      </TextoInicio>
    </>
  )
}
