import React, { useEffect, useRef, useState } from 'react'
import { useEventListener } from '../helpers/hooks';
import PropTypes from 'prop-types'

/**
 * Push child elements into the right columns
 * @param {Array} children 
 * @param {*} columns 
 */
const fillCols = (children, columns) => {
  children.forEach((child, index) => columns[index % columns.length].push(child))
}

function MasonryLayout({ children, gap, minWidth, ...rest }) {
  const ref = useRef();
  const [numCols, setNumCols] = useState(3);
  const cols = [...Array(numCols)].map(() => []);
  fillCols(children, cols);

  const resizeHandler = () => setNumCols(
    Math.ceil(ref.current.offsetWidth / minWidth)
  );
  useEffect(resizeHandler, []);
  useEventListener('resize', resizeHandler);
  return (
    <div ref={ref} style={{ gridGap: gap }} className="mason-div" {...rest}>
      {
        [...Array(numCols)].map((_, index) => (
          <div className="mason-col" key={index}>
            {cols[index]}
          </div>
        ))
      }
    </div>
  )
}

MasonryLayout.propTypes = {
  gap: PropTypes.string,
  minWidth: PropTypes.number
}

MasonryLayout.defaultProps = {
  gap: '1rem',
  minWidth: 300
}


export default MasonryLayout

