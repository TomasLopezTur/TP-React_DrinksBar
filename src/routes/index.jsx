import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from '../pages/Home';
import NotFound from '../pages/NotFount';


export default function AppRoutes (){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/NotFound' element={<NotFound />} />
            </Routes>
        </Router>
    )
}