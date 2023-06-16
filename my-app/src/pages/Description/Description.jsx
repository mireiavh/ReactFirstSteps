import "./Description.css"

import imageApp from "../../assets/images/description-1-app.png"
import DesSchedule from "./DesSchedule"

function Description() {
  return (
    <>
    <section className="description">
        <div className="description_1">
            <div className="description_1_img">
                <img src={imageApp} className="description_1_img"/>
            </div>
                <article className="description_1_text">
                    <h2>Organize Your Time And Start Getting Results</h2>
                    <h3>Sync is the first mobile app on the market to harness the power
                        of social connections to help you stop procastinating and 
                        start getting things done. Give it a try and see the changes right 
                        away
                    </h3>
                    <ul>
                        <li><p>Analyse and evaluate your current status and productivity</p></li>
                        <li><p>Begin monitoring your day to day routine with Sync app</p></li>
                        <li><p>See the improved results in no more than a couple of weeks</p></li>
                    </ul>
                </article>
        </div>
    </section>
    <DesSchedule></DesSchedule>
    </>
  )
}

export default Description