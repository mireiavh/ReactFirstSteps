import iconGoal from "../../assets/images/usuario.png"
import iconAnalysis from "../../assets/images/flecha-hacia-arriba.png"
import iconSettings from "../../assets/images/configuraciones.png"
import iconInteration from "../../assets/images/bocadillo-de-dialogo-negro.png"
import iconThingsDone from "../../assets/images/lanzadera.png"

import "./IconSolutions.css"

function IconSolutions() {
  return (
    <section className="intro_card">
        <div className="container">
            <div className="card">
                <div className="card_results">
                    <div className="card_img">
                        <img src={iconGoal}/>
                        <p>Identify Goals</p>
                    </div>
                    <div className="card_img">
                        <img src={iconAnalysis}/>
                        <p>Situation Analysis</p>
                    </div>
                    <div className="card_img">
                        <img src={iconSettings}/>
                        <p>Taks Settings</p>
                    </div>
                    <div className="card_img">
                        <img src={iconInteration}/>
                        <p>Social Interaction</p>
                    </div>
                    <div className="card_img">
                        <img src={iconThingsDone}/>
                        <p>Get Things Done</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IconSolutions