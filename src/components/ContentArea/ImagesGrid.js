import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { getGridRowEnd } from '../../helpers';

const ImagesGrid = ({ images, gridAutoRows = '30px', rowGap = '40px' }) => {
  const [wrapperWidth, setwrapperWidth] = useState(200);
  const properGridStyles = {
    gridAutoRows,
    rowGap
  }
  useEffect(() => {
    const imageWrapperWidth =
      document
        .querySelectorAll('.img-wrapper')[0]
        .getBoundingClientRect()
        .width;
    setwrapperWidth(imageWrapperWidth);
  }, []);

  return (
    <div className="proper-grids" style={properGridStyles}>
      {
        images.map((img, index) => (
          <div
            key={index}
            className="img-wrapper"
            style={{ gridRowEnd: getGridRowEnd({ img, wrapperWidth, ...properGridStyles }) }}
          >
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
  gridAutoRows: PropTypes.string,
  rowGap: PropTypes.string,
}

export default ImagesGrid
