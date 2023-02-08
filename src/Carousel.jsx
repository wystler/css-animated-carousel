import { useState } from "react"
import { Slide } from "./Slide.jsx"

export const Carousel = () => {

    return (
        <div className="container">
            <div className="carousel">
                {Array(5).fill().map((slide, index) => {
                    return <Slide index={index}/>
                })}
            </div>
        </div>
    )
}