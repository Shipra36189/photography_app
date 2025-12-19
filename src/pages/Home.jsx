import Navbar from '../Component/Navbar'
import Hero from '../Component/Home/hero/Hero'
import Owl from '../Component/Home/hero/Owl'
import AboutPs from '../Component/Home/hero/About/AboutPs'
import CounterPage from '../Component/Home/hero/CounterPage'
import ImageType from '../Component/Home/hero/ImageType/ImageType'
import Work from '../Component/Home/hero/Gallery/Work'
import Offer from '../Component/Home/hero/Offer/Offer'
import Testimonial from '../Component/Home/hero/testimonial/Testimonial'
import FooterGallery from '../Component/Home/hero/FooterGallery/FooterGallery'
import Footer from '../Component/Home/hero/Footer/Footer'
import Touch from '../Component/Home/hero/Touch/Touch'
import SplitSlider from '../Component/Split/SplitSlider'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Owl />
      <AboutPs />
      <CounterPage />
      {/* <ImageType /> */}
      <Work />
      <Offer />
      <Touch />
      <Testimonial />
      {/* <FooterGallery /> */}
      <Footer />
      {/* <SplitSlider /> */}
    </>
  )
}

export default Home
