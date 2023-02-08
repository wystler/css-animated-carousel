import { useEffect, useState } from "react"
import { Slide } from "./Slide.jsx"

export const Carousel = () => {

    const rotationTime = 5
    const [numberOfSlides, setNumberOfSlides] = useState(10) 

    return (
        <div className="container">

            <div className="carousel">
                {Array(+numberOfSlides).fill().map((slide, index) => {
                    return <Slide 
                        index={index}
                        rotationTime={rotationTime}
                        numberOfSlides={numberOfSlides}
                        />
                })}
            </div>

            <div className="inputs">
                <input 
                    className="inputRange numberOfSlides" 
                    type="range"
                    min="2"
                    max="10"
                    value={numberOfSlides}
                    onChange={(event) => {
                        setNumberOfSlides(event.target.value)
                    }}
                ></input>
                <input className="inputRange" type="range"></input>
                <input className="inputRange" type="range"></input>
            </div>

        </div>
    )
}