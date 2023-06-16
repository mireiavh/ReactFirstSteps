import Navbar from '../pages/navbar/Navbar.jsx'
import Banner from '../pages/Banner/Banner.jsx'
import Description from '../pages/Description/Description.jsx'
import Footer from '../pages/Footer/Footer.jsx'
import LastPanel from './LastPanel/LastPanel.jsx'
import Testimonials from './Testimonials/Testimonials.jsx'



function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Description></Description>
      <Testimonials></Testimonials>
      <LastPanel></LastPanel>
      <Footer></Footer>

    </>
  )
}

export default LandingPage
