import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, AboutPage, ContactPage } from '../pages'
import MainHeader from '../components/shared/MainHeader'

const AppRouting = () => {
    return (
        <BrowserRouter>
            <MainHeader/>
            <main className='containter' role='main'>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='contact' element={<ContactPage />}></Route>
                    <Route path='about' element={<AboutPage />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default AppRouting;