import React from 'react';
import Pages from './pages/Pages';
import './index.css'
import Category from './components/Category';

export default function App(){
  return(
    <div className='App'>
      <Category />
      <Pages />
    </div>
  )
}