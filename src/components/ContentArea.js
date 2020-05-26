import React, {Fragment} from 'react'
import ImageLoading from './ImagesLoading';
import PropTypes from 'prop-types'
import ImagesGrid from './ImagesGrid';

const ImageGrid = ({ loading, images, contentAreaShowing }) => {
  
  const gutter = "1.4rem";

  const visibleComponent =
    loading
      ? <ImageLoading gutter={gutter} />
      : <ImagesGrid images={images} gutter={gutter} />;

  return (
    <Fragment>
      {
        contentAreaShowing &&
        (<div className="grid-container">
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
