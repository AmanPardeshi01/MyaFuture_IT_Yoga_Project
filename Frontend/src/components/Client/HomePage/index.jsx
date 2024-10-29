import React from 'react'
// import Header from '../Header/Header'
import ContactUs from '../ContactSection/ContactUs'
// import CardSection from '../CardSection/CardSection'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import Footer from '../Footer/Footer'
import Gallery from '../GallerySection/Gallery'
import FAQs from '../FAQ/FAQSection'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'
import Benifits from '../Benefits/Benifits'
import Instructor from '../Instructor/Instructor'
import PriceCard from '../PriceCard/PriceCard'
import BlogSection from '../Blog/Blog'

const HomePage = () => {
    return (

        <div className='w-full'>
           <Navbar />
           <Landing />
           <Benifits />
            <Instructor />
            <PriceCard />
            <BlogSection />
            <TestimonialSection />
            <Gallery />
            {/* <CardSection/> */}
            <ContactUs />
            <FAQs />
            <Footer />
        </div>


    )
}

export default HomePage