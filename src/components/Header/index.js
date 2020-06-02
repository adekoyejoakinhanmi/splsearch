import React from 'react'
import PropTypes from 'prop-types'
import Search from './Search'

function Header({ contentAreaShowing, ...rest }) {
  const heroClassName = !contentAreaShowing ? 'hero' : 'hero slid-up';
  return (
    <header className={heroClassName}>
      <div className="container">
        <div className="hero-content">
          <h1 className="title">splashsearch</h1>
          <Search {...rest}/>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  searchImages: PropTypes.func.isRequired,
  contentAreaShowing: PropTypes.bool.isRequired,
}

export default Header

