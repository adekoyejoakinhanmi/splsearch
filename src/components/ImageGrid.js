import React, {Fragment} from 'react'
import ImageLoading from './ImagesLoading';
import PropTypes from 'prop-types'

const ImageGrid = ({ loading, contentAreaShowing }) => {
  const visibleComponent = loading ? <ImageLoading /> : <div>Some Images here</div>;
  return (
    <Fragment>
      {
        contentAreaShowing &&
        (<div className="container">
          {visibleComponent}
        </div>)
      }
    </Fragment>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  contentAreaShowing: PropTypes.bool.isRequired,
}

export default ImageGrid
