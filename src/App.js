import React from 'react';

import { Header, Footer, NavBar } from './containers';
import { Card } from './components';

import { ammunitionFragranse, vetiverFragranse, eternityFragranse } from '../src/images';

import { data } from './productsData';


import './app.css'

const App = () => {
  return (
    <div className='container'>
        <Header />
        <NavBar />
        <div className='main__content'>
            <Card image={ ammunitionFragranse } alt="Ammunition Fragranse Photo" 
                    name={data.fragrance.ammunitionData.name} />
            <Card image={ vetiverFragranse } alt="Vetiver Fragranse Photo"/>
            <Card image={ eternityFragranse } alt="Eternity Fragranse Photo"/>
        </div>
        <Footer />
    </div>
  )
};

export default App;