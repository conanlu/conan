import { Link } from "react-router-dom"
import 'Default.css'


const Navbar =()=>{
      return (
            <div className="navigation">
                  <Link to="/">Home</Link>
                  <Link to="/coursework">Coursework</Link>     
                  <Link to="/projects">Projects</Link>

            </div>
      )
}
export default Navbar;