import "./LastPanel.css"

import lastMovile from "../../assets/images/download-iphone.png"
import BttnDownload from '../../components/Buttons/BttnDownload'

function LastPanel() {
  return (
    <section>
        <div className="final_img">
            <img src={lastMovile} className="mobile"/>
        </div>
        <div className="final_text">
            <p>Do you feel like youre wasting time with small stuff instead of working towards your goals? 
            Start using Sync to organize your time and get a grip on your personal development</p>
        </div>
            <div className="final_button">
                <BttnDownload className="bttnDownload" content = {'Privacy'}></BttnDownload>
                <BttnDownload className="bttnDownload" content = {'Privacy'}></BttnDownload>
            </div>
    </section>
  )
}

export default LastPanel