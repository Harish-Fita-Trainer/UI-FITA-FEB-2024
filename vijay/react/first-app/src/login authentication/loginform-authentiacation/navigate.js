import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './loginpage';
export function AppRouter() {
    return <BrowserRouter>
        <div className="App">
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
                <Route path='*' element={<Home />}></Route>
            </Routes>
        </div>
    </BrowserRouter>

}


export function About() {
    return <h1>About</h1>
}

export function Contact() {
    return <div className="App">
        <h1>Contact</h1>
        <ul className="App-header">
            <li>
                <Link to="/">Home</Link>
            </li>

        </ul>
    </div>

}