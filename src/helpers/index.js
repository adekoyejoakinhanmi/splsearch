const calculateNewDimensions = (width, height, newWidth) => {
  const aspectRatio = width / height;
  const newHeight = newWidth / aspectRatio;
  return newHeight;
}

export const getGridRowEnd = ({ img, wrapperWidth, gridAutoRows, rowGap}) => {
  const gridRows = parseInt(gridAutoRows, 10);
  const gap = parseInt(rowGap, 10);

  const newHeight = calculateNewDimensions(img.width, img.height, wrapperWidth);
  const span = Math.ceil(newHeight / (gridRows + gap));
  return `span ${span}`;
}
