import React from "react"
import AnimalShow from "./AnimalShow";
import {useState} from "react";
import './App.css'



function getRandomAnimal(){
    const animals=['bird','dog','cat','gator','horse','cow']
    return animals[Math.floor(Math.random() * animals.length)]
}

console.log(getRandomAnimal())
export default function  App(){

const [animals,setAnimals]=useState([])
 const handleClick=()=>{

     setAnimals([...animals,getRandomAnimal()])

 }
const renderedAnimals=animals.map((animal,index)=>{
    return <AnimalShow type={animal} key={index} />
    }
)



  return(
      <div className ="app">
        <button  onClick={handleClick} > Add Animal</button>
          <div className ="animal-list">
              {renderedAnimals}
          </div>
      </div>
  )
}

