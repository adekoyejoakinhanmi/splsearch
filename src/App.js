import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [contentArea, setContentArea] = useState(false);
  const [images, setImages] = useState([]);

  const searchImages = async val => {
    if (val) {
      setContentArea(true);
      setLoading(true);
    } else {
      setContentArea(false);
      setLoading(false);
    }
    return Promise.resolve(true);
  }
  return (
    <div>
      <Header
        contentAreaShowing={contentArea}
        searchImages={searchImages}
      />
      <ImageGrid
        loading={loading}
        contentAreaShowing={contentArea}
        images={images}
      />
    </div>
  );
}

export default App;
