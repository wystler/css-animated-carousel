import { useEffect, useState } from "react"
import { Slide } from "./Slide.jsx"

export const Carousel = () => {

    const colours = ["red", "orange", "yellow", "yellowgreen", "green", "cyan", "blue", "purple", "magenta", "pink"]
    const [numberOfSlides, setNumberOfSlides] = useState(5) 
    const [rotationTime, setRotationTime] = useState(5)
    const [slideScale, setSlideScale] = useState(1)
    // eslint-disable-next-line
    const [slideContents, setSlideContents] = useState(colours)
    const [paused, setPaused] = useState("running")
    const [direction, setDirection] = useState("normal")
    const [slideRoll, setSlideRoll] = useState(false)
    const [slideArray, setSlideArray] = useState([])
    const [draw, setDraw] = useState(0)

    /////////////////////////////////////////////////////////////////////////////////////

    //  draw is used to trigger a rerender when the number of slides updates
    //  to stop new render overlapping with previous one

    useEffect(() => {
        setDraw(draw => draw + 1)
        setSlideArray(Array(numberOfSlides).fill())
    },[numberOfSlides, rotationTime, direction])

    /////////////////////////////////////////////////////////////////////////////////////


    const handleNumberOfSlidesChange = (event) => {
            setNumberOfSlides(+event.target.value)
        }
  

    return (
        <div className="container">

            <div className="carousel" key={draw}>
                {slideArray.map((slide, index) => {
                    return <Slide 
                        key={index}
                        index={index}
                        rotationTime={(11-rotationTime)/2}
                        slideRoll={slideRoll}
                        numberOfSlides={numberOfSlides}
                        slideScale={slideScale}
                        slideContents={slideContents}
                        animationPlayState={paused}
                        animationDirection={direction}
                        />
                })}
            </div>

            <div className="inputs">
                <input 
                    className="inputRange numberOfSlides" 
                    type="range"
                    min="2"
                    max="20"
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

                <input 
                    className="inputRange slideScale" 
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={slideScale}
                    onChange={(event) => {
                        setSlideScale(+event.target.value)
                    }}
                    ></input>

                <button 
                    onClick={() => {
                        paused === "running" ? setPaused("paused"): setPaused("running")
                        }}>
                    pause
                </button>

                <button
                    onClick={() => {
                        direction === "normal" ? setDirection("reverse") : setDirection("normal")
                    }}>
                    reverse
                </button>

                <button
                    onClick={() => {
                        slideRoll ? setSlideRoll(false) : setSlideRoll(true)
                    }}>
                    roll
                </button>
            </div>

        </div>
    )
}