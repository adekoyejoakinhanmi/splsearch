import React, {Fragment} from 'react'
import ImageLoading from './ImagesLoading';
import EmptyState from './EmptyState';
import PropTypes from 'prop-types'
import ImagesGrid from './ImagesGrid';

const ImageGrid = ({ loading, images, contentAreaShowing }) => {
  
  const gutter = "1.4rem";

  const imageComponent = images.length
    ? <ImagesGrid images={images} gutter={gutter} />
    : <EmptyState />

  const visibleComponent =
    loading
      ? <ImageLoading gutter={gutter} />
      : imageComponent;

  return (
    <Fragment>
      {
        contentAreaShowing &&
        (
          <div className="grid-container">
            {visibleComponent}
          </div>
        )
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
