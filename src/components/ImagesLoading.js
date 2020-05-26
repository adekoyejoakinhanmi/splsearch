import React from 'react';
import PropTypes from 'prop-types';
import MasonryLayout from './MasonryLayout';

const ImagesLoading = ({ gutter = "1.4rem" }) => {
  const divs = [
    '10em',
    '17em',
    '20em',
    '13em',
    '18em',
    '10em'
  ]

  return (
    <MasonryLayout gap={gutter}>
      {
        divs.map((height, index) => (
          <div key={index} style={{ height, marginBottom: gutter }} className="img-wrapper">
            <div className="loading-img">
              <div className="info">
                <div className="title"></div>
                <div className="location"></div>
              </div>
            </div>
          </div>
        ))
      }
    </MasonryLayout>
  )
}
ImagesLoading.propTypes = {
  gutter: PropTypes.string,
}
export default ImagesLoading
