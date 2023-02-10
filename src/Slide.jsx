import { useState, useEffect } from "react"

export const Slide = (props) => {

    const {index, rotationTime, numberOfSlides, slideContents, animationPlayState, animationDirection, slideScale, slideRoll} = props
    const [count, setCount] = useState(1)

    useEffect(() => {
        document.documentElement.style.setProperty(`--slideScale`, slideScale)
        slideRoll ? 
        document.documentElement.style.setProperty(`--slideRoll`, `360deg`) : 
        document.documentElement.style.setProperty(`--slideRoll`, `0deg`)
    },[slideScale, slideRoll])

    const animationDelay = -rotationTime+index*(rotationTime/numberOfSlides)+0.05
    //  -rotationtime fills the carousel before render,
    //  index selects the next slide, 
    //  rotationTime/numberOfSlides sets the space between slides 
    //  0.05 prevents the first and last slide swapping position in the carousel

    return (
        <div 
        className="slide"
        onAnimationIteration={() => setCount(count + 1)}
        style={{
            animationDelay:`${animationDelay}s`,
            animationDuration:`${rotationTime}s`,
            animationPlayState:animationPlayState,
            animationDirection:animationDirection,
            backgroundColor:slideContents[(index+(count*numberOfSlides))%slideContents.length],
        
        }}
        >
    </div>
    )
}