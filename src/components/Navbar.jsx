import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">Aboute</Link>
        <Link to="/create">Create</Link>
    </div>
  )
}

export default Navbar