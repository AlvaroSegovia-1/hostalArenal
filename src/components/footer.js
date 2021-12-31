import React from "react"
import { css } from "@emotion/react"
//import Navegacion from './nav'

const Footer = ({title}) => {

  const year = new Date().getFullYear()

  return (
    <footer
      css={css`
        background-color: #222;
        padding: 1rem;
        width: 90%;
        margin: 2rem auto;
        
        margin-block-start: 9rem;

        /* @media (min-width: 1500px) {
          width: 80%;
        } */
      `}
    >
      <div
        css={css`
          max-width: 1200px;

          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            //justify-content: space-between;
          }
        `}
      >
        <h1
          css={css`
            color: #fff;
            text-align: center;
            margin: 0 auto;
            
          `}
        >
          Hostal Arenal
        </h1>
        {/* <Navegacion/> */}

        <p
          css={css`
            margin: 0 auto;
            color: white;
            text-align: center;
          `}
        >
          {title}. Todos los derechos reservados {year} &copy; 
        </p>
      </div>
    </footer>
  )
}

export default Footer
