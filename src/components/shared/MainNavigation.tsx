import {Link} from 'react-router-dom'

const MainNavigation = () => {
    return (
        <nav>
            <ul className='main-page-navigation'>
                <li><Link to="contact">Kontakt Oss</Link></li>
                <li><Link to="about">Om Oss</Link></li>
            </ul>
        </nav>
    )
}

export default MainNavigation;