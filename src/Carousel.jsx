import { useEffect, useState } from "react"
import { Slide } from "./Slide.jsx"

export const Carousel = () => {

    const colours = ["red", "orange", "yellow", "yellowgreen", "green", "cyan", "blue", "purple", "magenta", "pink"]
    const [numberOfSlides, setNumberOfSlides] = useState(5) 
    const [rotationTime, setRotationTime] = useState(5)
    const [slideContents, setSlideContents] = useState(colours)
    const [paused, setPaused] = useState("running")
    const [slideArray, setSlideArray] = useState([])
    const [draw, setDraw] = useState(0)

    const handleNumberOfSlidesChange = (event) => {
            setNumberOfSlides(+event.target.value)
        }

    //  draw is used to trigger a rerender when the number of slides updates
    //  to stop new render overlapping with previous one
    useEffect(() => {
        setDraw(draw + 1)
        setSlideArray(Array(numberOfSlides).fill())
    },[numberOfSlides, rotationTime])

    return (
        <div className="container">

            <div className="carousel" key={draw}>
                {slideArray.map((slide, index) => {
                    return <Slide 
                        key={index}
                        index={index}
                        rotationTime={(11-rotationTime)/2}
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
                    onChange={handleNumberOfSlidesChange}
                ></input>

                <input 
                    className="inputRange rotationTime"
                    type="range"
                    min="1"
                    max="10"
                    value={rotationTime}
                    onChange={(event) => {
                        setRotationTime(+event.target.value)
                    }}
                ></input>

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