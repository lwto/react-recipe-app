import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

  let params = useParams()
  const [details, setDetails] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchDetails = async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=3a0f6785c95240b6964d13fdd238a12b`)
    const detailData = await data.json()
    setDetails(detailData)
    setIngredients(prev => detailData.extendedIngredients)
    console.log(ingredients)
  } 

  useEffect(()=>{
    fetchDetails()
    
  },[params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button onClick={(()=> setActiveTab('instructions'))} className={activeTab=== 'instructions' ? 'active' : ''}>Instructions</Button>
        <Button onClick={(()=> setActiveTab('ingredients'))} className={activeTab=== 'ingredients' ? 'active' : ''}>Ingredients</Button>
        {activeTab === 'instructions' && 
          (
            <div>
            <h2>Summary</h2>
            <h3 dangerouslySetInnerHTML={{ __html:details.summary }}></h3>
            <h2>Instructions</h2>
            <h3 dangerouslySetInnerHTML={{ __html:details.instructions }}></h3>
          </div>
          )
        }
        {activeTab === 'ingredients' && (
          <ul>
          {
            ingredients.map((ingredient, index)=>{
            return(
              <li key={index}>
              {ingredient.original}
            </li>
            ) 
            })
          }
        </ul>
        )}
        
       
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top:5rem;
  margin-bottom:5rem;
  display:flex;
  .active{
    background:linear-gradient(35deg, #494949, #313131);
    color:white;
  }
  h2{
    margin-bottom:2rem;
  }
  li{
    font-size:1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top:2rem;
  }
`
const Button = styled.button`
  padding:1rem 2rem;
  color:#313131;
  background:white;
  border: 2px solid black;
  margin-right:2rem;
  font-weight:600;
  margin-bottom: 1rem;
`
const Info = styled.div`
  margin-left:4rem;
  h2{
    margin-top:2rem;
    text-decoration: underline;
  }
`
export default Recipe
