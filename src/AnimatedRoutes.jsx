import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import ChoisePage from './Pages/ChoisePage/ChoisePage'
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/choisePage' element={<ChoisePage />} />
                </Routes>
            </AnimatePresence>

        </div>
    )
}

export default AnimatedRoutes