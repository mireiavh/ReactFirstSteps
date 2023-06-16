
import "./Navbar.css"
import BttnDownload from '../../components/Buttons/BttnDownload'
import Logo from "../../assets/images/logo__.png"

/*const Navbar = () => {
  return (
    <nav className="NavLinks">
        <ul>
            <li><Link to="./#">DESCRIPTION</Link></li>
            <li><Link to="./#">FEATURES</Link></li>
            <li><Link to="./#">SCREENS</Link></li>
            <li><Link to="./#">EXTRA</Link></li>
            <BttnDownload content = {'Download'}></BttnDownload>
        </ul>
    </nav>
  )
}*/

const Navbar = () => {
  return (
    <header id="canva_navbar">
        <div className="menu">
            <nav id="navbar">
                <div>
                    <img src={Logo} className="logo"/>
                </div>
                <div className="navbar_text">
                    <ul>
                        <li><a href="#" className="nav_click">DESCRIPTION</a></li>
                        <li><a href="#" className="nav_click">FEATURES</a></li>
                        <li><a href="#" className="nav_click">SCREENS</a></li>
                        <li><a href="#" className="nav_click">EXTRA</a></li>
                        <BttnDownload className="bttnDownload" content = {'Privacy'}></BttnDownload>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar


