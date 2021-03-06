import * as React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"
import useSeo from "../hooks/use-seo"

const Layout = props => {
  const seo = useSeo()

  const {siteName, fallbackSeo: {description, title}} = seo

  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h3 {
            font-family: "Oooh Baby";
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oooh+Baby&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
      <Footer 
      title={title}
      />
    </>
  )
}

export default Layout
