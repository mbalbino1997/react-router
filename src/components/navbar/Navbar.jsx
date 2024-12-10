import { Link, NavLink } from "react-router-dom"
import style from "./Navbar.module.css"
export default function Navbar() {
    return (
        <nav className={style.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">about us</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </nav>
    )
}