import React from 'react';

import { Header, Footer, NavBar } from './containers';
import { Card } from './components';

import './app.css'

const App = () => {
  return (
    <div className='container'>
        <Header />
        <NavBar />
        <div className='main__content'>
            <Card />
        
        </div>
        <Footer />
    </div>
  )
};

export default App;