import { useState } from "react"

export const Slide = (props) => {

    const {index, rotationTime, numberOfSlides} = props
    const [count, setCount] = useState(0)
    const slides = ["red", "orange", "yellow", "yellowgreen", "green", "cyan", "blue", "purple", "magenta", "pink"]     //10

    const animationDelay = -index*rotationTime/numberOfSlides

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