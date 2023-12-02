import logo from "../assets/tent-logo.svg"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} alt="A thinline drawing tent logo" />
        <h3>NomadTales</h3>
      </nav>
    </header>
  )
}

export default Navbar