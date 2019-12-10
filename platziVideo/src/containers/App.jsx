import React, { useState, useEffect } from 'react';
import '../assets/styles/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {
        initialState.mylist.length  > 0 ? 
        <Categories title="My List">
          <Carousel>
            <CarouselItem />
          </Carousel>
          </Categories>
          : null
      }

      <Categories title="Trends">
        <Carousel>
          {
            initialState.trends.map(item => <CarouselItem key={item.id} {...item} />)
          }
         
        </Carousel>
      </Categories>

      <Categories title="Most recent">
        <Carousel>
        {
          initialState.originals.map(item => <CarouselItem key={item.id} {...item} />)
        }
        </Carousel>
      </Categories>
      
      <Footer />
    </div>
  );
}

export default App;