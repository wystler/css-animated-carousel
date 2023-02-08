import { useEffect, useState } from "react"
import { Slide } from "./Slide.jsx"

export const Carousel = () => {

    const rotationTime = 5
    const colours = ["red", "orange", "yellow", "yellowgreen", "green", "cyan", "blue", "purple", "magenta", "pink"]
    const [numberOfSlides, setNumberOfSlides] = useState(10) 
    const [slideContents, setSlideContents] = useState(colours)
    const [paused, setPaused] = useState("running")

    return (
        <div className="container">

            <div className="carousel">
                {Array(numberOfSlides).fill().map((slide, index) => {
                    return <Slide 
                        key={index}
                        index={index}
                        rotationTime={rotationTime}
                        numberOfSlides={numberOfSlides}
                        slideContents={slideContents}
                        animationPlayState={paused}
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
                        setNumberOfSlides(+event.target.value)
                    }}
                ></input>
                <input className="inputRange" type="range"></input>
                <input className="inputRange" type="range"></input>
                <button 
                    onClick={() => {
                        paused === "running" ? setPaused("paused"): setPaused("running")
                        }}>
                    pause
                </button>
            </div>

        </div>
    )
}