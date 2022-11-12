import React, { useEffect, useState } from 'react'

const ImageSlider = ({slides, autoPlay = true, autoPlayTime = 5000, children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        const newIndex = currentIndex >= slides.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
      }, autoPlayTime)
      return () => clearTimeout(timer)
    },[currentIndex])

    const sliderStyles= {
        height: '70%',
        position: 'relative'
    }

    const slideStyles = {
        minHeight: '65vh', 
        width: '100%',
        height: '600%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        transition: '2000ms all ease-in-out',
        backgroundImage: `url(${slides[currentIndex].url})`
    }
  return (
    <div style={sliderStyles}>
        <div style={slideStyles}>
          {children}
        </div>
    </div>
  )
}

export default ImageSlider