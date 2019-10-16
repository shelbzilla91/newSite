/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import layoutStyles from '../components/layout.module.scss'

import Header from "./header"
import '../styles/index.scss'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query site {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className = {layoutStyles.container}>
      <div className={layoutStyles.content}>
      <main>{children}</main>
      </div>
       
      
       
        <footer>
         yo footer
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
