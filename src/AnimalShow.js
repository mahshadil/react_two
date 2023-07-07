import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import heart from './svg/heart.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import {useState} from "react";
import  './AnimalShow.css'

const svgMap={
    bird,
    cat,
    cow,
    horse,
    gator,
    dog
}



export default  function AnimalShow({type}){
const [clicks,setClicks]=useState(0)

    const handleClick=()=>{
    setClicks(clicks +1)
    }


    return(
        <div onClick={handleClick}  className="animal-show">
           <img alt="animal" src={svgMap[type]}  className ="animal"/>
            <img  className ="heart"  alt="heart" src={heart}  style={{width:10 + 10 *clicks + "px"}}/>
        </div>
    )
}


