import { useState } from "react"

export const Slide = (props) => {

    const {index, rotationTime, numberOfSlides} = props
    const [count, setCount] = useState(1)
    const slides = ["red", "orange", "yellow", "yellowgreen", "green", "cyan", "blue", "purple", "magenta", "pink"]     //10

    const animationDelay = -rotationTime+index+0.05
    //  -rotationtime fills the carousel before render,
    //  index selects the next slide, 
    //  0.05 prevents the first and last slide swapping position in the carousel

    return (
        <div 
        className="slide"
        onAnimationIteration={() => setCount(count + 1)}
        style={{
            animationDelay:`${animationDelay}s`,
            animationDuration:{rotationTime},
            backgroundColor:slides[(index+(count*numberOfSlides))%slides.length]
        }}
        >
    </div>
    )
}