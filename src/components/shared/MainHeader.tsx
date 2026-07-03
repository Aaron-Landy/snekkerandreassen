import { useState } from 'react'
import { Link } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import logo from "../../assets/Logo_-removebg-preview (1).png";

const MainHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='main-page-header'>
            <Link id='logo' to="/">
                <img src={logo} alt="logo" />
            </Link>

            <button
                className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <span />
                <span />
                <span />
            </button>

            <div
                className={`nav-backdrop ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
                <MainNavigation />
            </div>
        </header>
    )
}

export default MainHeader;