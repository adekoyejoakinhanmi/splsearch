import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header'
import ContentArea from './components/ContentArea'
import { getImages } from './api';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [contentArea, setContentArea] = useState(false);
  const [images, setImages] = useState([]);

  const searchImages = async val => {
    try {
      setLoading(true);
      setContentArea(true);
      const res = await getImages(val);
      setImages(res.results);
    } catch (error) {
      setImages([]);
      setContentArea(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    }
  }

  useEffect(() => {
    searchImages('African')
  }, [])

  return (
    <div>
      <Header
        contentAreaShowing={contentArea}
        searchImages={searchImages}
      />
      <ContentArea
        loading={loading}
        contentAreaShowing={contentArea}
        images={images}
      />
    </div>
  );
}

export default App;
