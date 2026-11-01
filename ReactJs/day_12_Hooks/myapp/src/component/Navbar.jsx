import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/contact/1234/Prathmesh'}>Contact</NavLink>
        </>
    )
}

export default Navbar