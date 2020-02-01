import React from 'react'
import PropTypes from 'prop-types'

const ImageGrid = ({ loading, contentAreaShowing }) => {
  return (
  <>
    { contentAreaShowing &&
        (<div className="container" >
          searching
        </div>)
      }
  </>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  contentAreaShowing: PropTypes.bool.isRequired,
}

export default ImageGrid
