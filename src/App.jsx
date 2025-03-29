import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './component/Sidebar/Sidebar'
import Dashboard from './component/trail/Trail'
import Dashboard2 from './component/DashBoard/DashBoard'
import Dashboard1 from './component/Third/Third'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Sidebar />}>
    <Route path='/a' element={<Dashboard2 />} />
    <Route path='/nest' element={< Dashboard/>} />
    <Route path='/third' element={< Dashboard1/>} />
    </Route>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
