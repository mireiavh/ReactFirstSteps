import "./AppVisulas.css"

import Visual_1 from "../../assets/images/screenshot-1.jpg"
import Visual_2 from "../../assets/images/screenshot-2.jpg"
import Visual_3 from "../../assets/images/screenshot-3.jpg"
import Visual_4 from "../../assets/images/screenshot-4.jpg"

function AppVisuals() {
  return (
    <>
    <div className="slider_frame">
        <div className="slider_flex">
            <div className="slider_w">
                <img src={Visual_1}/>
            </div>
            <div className="slider_w">
                <img src={Visual_2}/>
            </div>
            <div className="slider_w">
                <img src={Visual_3}/>
            </div>
            <div className="slider_w">
                <img src={Visual_4}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default AppVisuals