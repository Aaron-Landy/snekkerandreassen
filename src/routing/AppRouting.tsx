import { HashRouter, Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage, ContactPage } from '../pages'
import MainHeader from '../components/shared/MainHeader'

const AppRouting = () => {
    return (
        <HashRouter>
            <MainHeader/>
            <main className='containter' role='main'>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='contact' element={<ContactPage />}></Route>
                    <Route path='about' element={<AboutPage />}></Route>
                </Routes>
            </main>
        </HashRouter>
    )
}

export default AppRouting;