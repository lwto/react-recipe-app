import React from 'react'
import {Link , useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styled from 'styled-components'


function Searched() {
  const [searchItems, setSearchItems] = useState([])
  let params = useParams()

  const getSearched = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3a0f6785c95240b6964d13fdd238a12b&query=${name}`)
    const recipes = await data.json()
    setSearchItems(recipes.results)
  }

  useEffect(()=>{
    getSearched(params.search)
  },[params.search])

  return (
    
    <Grid>
      {searchItems.map((item)=>{
        return(
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
const Card = styled.div`
  img{
    width:100%;
    border-radius:2rem;
  }
  a{
    text-decoration:none;
  }
  h4{
    text-align:center;
    padding:1rem;
  }
`
export default Searched