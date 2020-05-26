import React from 'react'
import PropTypes from 'prop-types'
import MasonryLayout from './MasonryLayout'

const ImagesGrid = ({ images, gutter }) => {
  return (
    <div className="proper-grids">
      {
        images.map((img, index) => (
          <div key={index} className="img-wrapper">
            <div className="image">
              <img src={img.urls.small} alt={img.alt_description} />
              <div className="info">
                <div>{img.user.first_name} {img.user.last_name}</div>
                <div>{img.user.location}</div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

ImagesGrid.propTypes = {
  images: PropTypes.array.isRequired,
  gutter: PropTypes.string,
}

export default ImagesGrid
