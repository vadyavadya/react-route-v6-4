import { Link, Outlet, Route, Routes } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>This is a demo website about React-router-dom library.</p>
            <ul>
                <li><Link to="contacts">Our contacts</Link></li>
                <li><Link to="teams">Our team</Link></li>
            </ul>
            <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="teams" element={<p>Our teams</p>} />
            </Routes>
        </div>
    )
}

const About2 = () => {
    return (
        <div>
            <h1>About us 2</h1>
            <p>This is not first about and demo website about React-router-dom library.</p>
            <ul>
                <li><Link to="contacts">Our contacts</Link></li>
                <li><Link to="teams">Our team</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export { About, About2 }