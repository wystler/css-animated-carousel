import { useState } from "react"

export const Slide = (props) => {

    const {index} = props
    const [count, setCount] = useState(0)
    const slides = ["red", "orange", "yellow", "yellowgreen", "green", "cyan", "blue", "purple", "magenta", "pink"]     //10

    return (
        <div 
        className="slide"
        onAnimationIteration={() => setCount(count + 1)}
        style={{
            animationDelay:`${index+0.1}s`,
            animationDuration:`5s`,
            backgroundColor:slides[(index+(5*count))%10]
        }}
        >
    </div>
    )
}