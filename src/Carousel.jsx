import { useState } from "react"

export const Carousel = () => {

    const slides = ["red", "orange", "yellow", "yellowgreen", "green", "cyan", "blue", "purple", "magenta", "pink"]     //10

    const [count, setCount] = useState(0)

    return (
        <div className="carousel">
            {Array(5).fill().map((slide, index) => {
                return <div 
                    className="slide"
                    onAnimationIteration={() => setCount(count + 1)}
                    style={{
                        animationDelay:`-${index*1}s`,
                        backgroundColor:slides[index]
                    }}
                    >
                </div>})}
        </div>
    )
}