import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from '../components/header.module.scss'

const Header = ({ siteTitle }) => (
  <header

  >
    <div className = {headerStyles.header}

  
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
