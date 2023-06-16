import "./Banner.css"
import BttnDownload from '../../components/Buttons/BttnDownload'

import mobile from "../../assets/images/header-iphone.png"
import IconSolutions from "../../components/IconSolutions/IconSolutions"


function Banner() {
  return (
    <section className="section_intro">
        <div className="intro">
            <h1>Mobile App Landing Page</h1>
            <h2>Start focusing on your goals and get more things donde with
                Sync mobile application. Its the first app to harness the power
                of social connections to help you stay focused and get organized.
            </h2>
            <div className="intro_links">
              <BttnDownload className="bttnDownload" content = {'Privacy'}></BttnDownload>
              <BttnDownload className="bttnDownload" content = {'Privacy'}></BttnDownload>
            </div>
            <div className="intro_img">
              <img src={mobile} className="mobile"/>
            </div>
            <IconSolutions></IconSolutions>
        </div> 
    </section>
  )
}

export default Banner