import "../IconSolutions/IconSolutions.css"

import iconGoal from "../../assets/images/usuario.png"
import iconAnalysis from "../../assets/images/flecha-hacia-arriba.png"
import iconSettings from "../../assets/images/configuraciones.png"
import iconInteration from "../../assets/images/bocadillo-de-dialogo-negro.png"
import iconThingsDone from "../../assets/images/lanzadera.png"

function IconGoals() {
  return (
    <>
        <section className="intro_card">
            <div className="container">
                <div className="card">
                    <div className="card_results">
                        <div className="card_img">
                            <img src={iconGoal}/>
                            <p>231</p>
                            <p>Happy Users</p>
                        </div>
                        <div className="card_img">
                            <img src={iconAnalysis}/>
                            <p>385</p>
                            <p>Issues solved</p>
                        </div>
                        <div className="card_img">
                            <img src={iconSettings}/>
                            <p>159</p>
                            <p>Good reviews</p>
                        </div>
                        <div className="card_img">
                            <img src={iconInteration}/>
                            <p>127</p>
                            <p>Case studies</p>
                        </div>
                        <div className="card_img">
                            <img src={iconThingsDone}/>
                            <p>211</p>
                            <p>Orders recieved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default IconGoals