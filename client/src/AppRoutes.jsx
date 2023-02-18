import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Chat } from './pages'

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </div>
    )
}

export default AppRoutes