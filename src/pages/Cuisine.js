import styled from 'styled-components'
import{motion} from 'framer-motion'
import {Link , useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Cuisine() {

  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  const getCuisine = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3a0f6785c95240b6964d13fdd238a12b&cuisine=${name}`)
    const recipes = await data.json()
    setCuisine(recipes.results)
  }

  useEffect(()=>{
    getCuisine(params.type)
  },[params.type])

  return (
    <Grid>
      {cuisine.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
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

export default Cuisine