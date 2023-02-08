import { Slide } from "./Slide.jsx"

export const Carousel = () => {

    const rotationTime = 5
    const numberOfSlides = 5

    return (
        <div className="container">
            <div className="carousel">
                {Array(5).fill().map((slide, index) => {
                    return <Slide 
                        index={index}
                        rotationTime={rotationTime}
                        numberOfSlides={numberOfSlides}
                        />
                })}
            </div>
        </div>
    )
}