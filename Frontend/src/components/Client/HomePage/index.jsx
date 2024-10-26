import React from 'react'
import Header from '../Header/Header'
import ContactUs from '../ContactSection/ContactUs'
import CardSection from '../CardSection/CardSection'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import Footer from '../Footer/Footer'
import Gallery from '../GallerySection/Gallery'

const HomePage = () => {
    return (

            <div className='w-full'>
                {/* <Header /> */}
                <TestimonialSection/>
                {/* <Gallery/> */}
                <CardSection/>
                <ContactUs />
                <Footer/>
            </div>


    )
}

export default HomePage