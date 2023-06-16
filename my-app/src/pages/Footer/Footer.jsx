import "./Footer.css"
import FooterLinksInfo from "./atomsFooter/FooterLinksInfo"
import FooterLinksPolicy from "./atomsFooter/FooterLinksPolicy"
import FooterLinksOthers from "./atomsFooter/FooterLinksOthers"

const Footer = () => {
  return (
    <footer className = "footer">
        <div className = "container">
            <div className = "footer_row">
                <FooterLinksInfo></FooterLinksInfo>
                <FooterLinksPolicy></FooterLinksPolicy>
                <FooterLinksOthers></FooterLinksOthers>
            </div>
        </div>
    </footer>
  )
}

export default Footer
