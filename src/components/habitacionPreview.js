import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 90%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: 20px auto;
  border-radius: 10px;
`

export const HabitacionPreview = ({ habitacion }) => {
  const { contenido, titulo, slug, imagen } = habitacion

  //console.log(habitacion)

  const imagen2 = getImage(imagen.gatsbyImageData)

  /* const ima = getImage(
    habitacion.allDatoCmsPagina.nodes[0].imagen.gatsbyImageData
  ) */
  return (
    <div
      css={css`
        border: 2px solid #ede6ed;
        border-radius: 8px;
        margin-bottom: 2rem;
        background-color: #ede6ed;
      `}
    >
      <GatsbyImage
        image={imagen2}
        alt="habitacion"
        css={css`
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          border-top: 5px solid #ede6ed;
          border-left: 5px solid #ede6ed;
          border-right: 5px solid #ede6ed;
        `}
      />

      <div
        css={css`
          padding: 2rem;
        `}
      >
        <h3
          css={css`
            text-align: center;
            font-size: 25px;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>
        <Boton to={slug}> Ver Habitación</Boton>
      </div>
    </div>
  )
}
