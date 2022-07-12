import React from 'react';
import Pages from './pages/Pages';
import './index.css'
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search'
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi'
import { Link } from 'react-router-dom';

export default function App(){
  return(
    <div className='App'>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}> delicious </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}
const Logo = styled(Link)`
  text-decoration:none;
  font=size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two', cursive;
`
const Nav = styled.div`
  padding:2rem 0rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  svg{
    font-size:2rem;
  }
`