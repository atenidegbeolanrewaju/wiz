import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import './HomeD.css'
import ImageSlider from './ImageSlider'

const HomeD = () => {
    const slides = [
        {url: './home_image1.png'},
        {url: './home_image2.png'},
        {url: './home_image3.png'}
    ]
    const containerStyles = {
        width: '100%',
        alignItems: 'center', 
        alignContent: 'center',
        margin: '0 auto',
        bottom: '0px',
        top: '0',
        height: '60%'
    }
      return (
        <div className='Home-container'>
            <div style={containerStyles}>
                <ImageSlider slides={slides}>
                    <div className='Home-header'>
                        <div className='community-info'>
                            <h2>Who We Are</h2>
                            <p className='project-para'>Wizer Academy is a leading provider of human capital development support, specialising in financial modeling, data analysis and visualization, project finance, business valuation, accounting, and financial analysis in Lagos, Nigeria</p>
                            <Button handleClick={() => alert('More')} type='submit' className='btn solid'>Read More</Button>
                        </div>
                    </div>
                </ImageSlider>
            </div>
            <div className='about'>
                <div className='about-content'>
                    <div className='about-logo'>

                    </div>
                    <div className='about-learn'>

                    </div>
                    <div className='about_'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeD

// const HomeD = () => {
//   return (
//     <section> 
//         <div className='Home-container'>
//             <div id='header'>
//                 <div className='Home-header'>
//                     <div className='community-info'>
//                         <h2>Who We Are</h2>
//                         <p className='project-para'>Wizer Academy is a leading provider of human capital development support, specialising in financial modeling, data analysis and visualization, project finance, business valuation, accounting, and financial analysis in Lagos, Nigeria</p>
//                         <Button handleClick={() => alert('More')} type='submit' className='btn solid'>Read More</Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )}