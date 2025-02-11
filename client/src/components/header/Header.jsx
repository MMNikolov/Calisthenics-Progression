import { Link } from 'react-router-dom'

export default function Header(){
    return(
    <header>
        <h1><Link className="home" to="/">Calistenix</Link></h1>
        <nav>
            <Link to="/exercises">All Exercises</Link>
            <div id="user">
                <Link to="/exercises/create">Create Exercise</Link>
                <Link to="/logout">Logout</Link>
            </div>
            <div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    </header>
    )
}