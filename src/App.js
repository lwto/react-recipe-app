import React from 'react';
import Pages from './pages/Pages';
import './index.css'
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search'

export default function App(){
  return(
    <div className='App'>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}