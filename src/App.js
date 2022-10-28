import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Navigation from './components/Navigation';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<Home/>} exact/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;