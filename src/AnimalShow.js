import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import heart from "./svg/heart.svg"
import horse from "./svg/horse.svg"
import { useState } from 'react'
import './AnimalShow.css'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}


function AnimalShow({ type }) {
    const [click, setClick] = useState(0)

    const handleClick = () => {
        setClick(click + 1)
    }

    return (
        <div className='animal-show' onClick={handleClick}>
            <img src={svgMap[type]} alt="animal" className="animal" />
            <img
                src={heart}
                alt="heart"
                style={{ width: 10 + 10 * click }}
                className="heart"
            />
        </div>
    )
}

export default AnimalShow








