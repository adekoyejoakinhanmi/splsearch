import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header'
import ContentArea from './components/ContentArea'
import { getImages } from './api';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [contentArea, setContentArea] = useState(false);
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('');

  const searchImages = async val => {
    if (!val) {
      setContentArea(false);
      setImages([]);
      return;
    }
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
    const randomSearchTerms = ['African', 'European', 'Coffee', 'Soup', 'Food'];
    const term = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)]
    setSearchText(term);
    searchImages(term);
  }, [])

  return (
    <div>
      <Header
        contentAreaShowing={contentArea}
        searchImages={searchImages}
        searchText={searchText}
        setSearchText={setSearchText}
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
