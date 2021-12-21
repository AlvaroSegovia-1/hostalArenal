import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Contenido = styled.main`
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

const ContenidoNosotros = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  //console.log(resultado.allDatoCmsPagina.nodes[0])

  const { titulo, contenido } = resultado.allDatoCmsPagina.nodes[0]

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
      <Contenido>
        <p>{contenido}</p>
        <StaticImage
          src="https://www.datocms-assets.com/60107/1640013370-4.jpg?auto=format"
          alt="habitacion"
        />
      </Contenido>
    </>
  )
}

export default ContenidoNosotros
