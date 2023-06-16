import "./DesSchedule.css"
import Scheduleimg from "../../assets/images/description-2-app.png"
import BttnDownload from '../../components/Buttons/BttnDownload'

function DesSchedule() {
  return (
    <section className="description">
        <div className="description_2">
            <div className="description_article_2">
                <div className="button_description_2">
                    <BttnDownload className="bttnPurple" content = {'Schedule'}></BttnDownload>
                    <BttnDownload className="bttnPurple" content = {'Tracking'}></BttnDownload>
                    <BttnDownload className="bttnPurple" content = {'Organize'}></BttnDownload>
                </div>
                <article className="description_2_text">
                    <ul>
                        <li><h3><span>Schedule tasks</span> to keep track of their completion. 
                            Sync provides multiple scheduling options including 
                            alarms and reminders.</h3></li>
                        <li><p>You can always add 
                            new tasks or change the settings of existing ones in your 
                            calendar view or the app control panel
                        </p></li>
                        <li><p>Its easy to say focused on
                            your most important daily activities that will get you closer to 
                            meeting your goals
                        </p></li>
                        <li><p>Use phone reminders to free 
                            up your long term memory which will reduce stress and make you 
                            more productive
                        </p></li>
                            <BttnDownload className="bttnDownload" content = {'Terms'}></BttnDownload>
                            <BttnDownload className="bttnBlack" content = {'Privacy'}></BttnDownload>
                    </ul>
                </article>
            </div>
            <div className="description_2_img">
                <img src={Scheduleimg} className="logo"/>
            </div>
        </div>
    </section>
  )
}

export default DesSchedule