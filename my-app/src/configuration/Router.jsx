import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
/*import Banner from "../pages/Banner";
import Description from "../pages/DescriptionApp";
import Testimonials from "../pages/Testimonials";
import OurWorks from "../pages/OurWorks";
import LastPanel from "../pages/LastPanel";
import Footer from "../pages/Footer";*/

const RouterItem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element= {<LandingPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};
export default RouterItem;


/*<Route path="/banner" element= {<Banner/>}></Route>
                <Route path="/description" element= {<Description/>}></Route>
                <Route path="/testimonials" element= {<Testimonials/>}></Route>
                <Route path="/ourwork" element= {<OurWorks/>}></Route>
                <Route path="/lastpanel" element= {<LastPanel/>}></Route>
                <Route path="/contact" element= {<Footer/>}></Route>
*/
