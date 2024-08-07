import React from 'react'
import Hero from '../components/Hero/Hero'
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Popular from '../components/Popular/popular';

const Shop = () => {
  return (
    <div>
      <Hero />
      
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop
