import { Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './Home'
import NavBar from './components/NavBar'
import Recipes from './components/Recipes'


const MyRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/dungeon' element={<Home />} />
                <Route path='/category/:categoryName' element={<Recipes />} />
            </Routes>
        </>
    )
}


export default MyRouter