import { Link } from "react-router-dom"

const Homepage = () => {
    return (
        <div>
            <h1>Get started with React-Router 6</h1>
            <ul>
                <li><Link to="contacts">Our contacts</Link></li>
                <li><Link to="teams">Our team</Link></li>
            </ul>
        </div>
    )
}

export { Homepage }