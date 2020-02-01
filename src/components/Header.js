import React from 'react'
import PropTypes from 'prop-types'
import Search from './Search'

function Header({ searchImages, contentAreaShowing }) {
  const heroClassName = !contentAreaShowing ? 'hero' : 'hero slid-up';
  return (
    <header className={heroClassName}>
      <div className="container">
        <div className="hero-content">
          <h1 className="title">splashsearch</h1>
          <Search searchImages={searchImages} />
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

