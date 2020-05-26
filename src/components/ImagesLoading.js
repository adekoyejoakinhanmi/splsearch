import React from 'react'
import MasonryLayout from './MasonryLayout';

const ImagesLoading = () => {
  const divs = [
    '10em',
    '7em',
    '9em',
    '13em',
    '8em',
    '10em'
  ]
  const gutter = "1.4rem";

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

export default ImagesLoading
