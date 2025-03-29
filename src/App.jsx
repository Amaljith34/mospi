import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './component/Sidebar/Sidebar'
import Dashboard from './component/trail/Trail'
import Dashboard2 from './component/DashBoard/DashBoard'
import Dashboard1 from './component/Third/Third'
import GDP from './component/trail/Trail'
import Gross_Value_Added from './component/trail/Gross_Value_Added'
import Gross_Industrial_Usage from './component/trail/Gross_Industrial_Usage'
import GFCF from './component/trail/GFCF'
import Key_Aggregates_National_Account from './component/trail/Key_Aggregates_National_Account'
import Statewise_Comparison from './component/trail/Statewise_Comparison'
import Statistical_Analysis from './component/trail/Statistical_Analysis'
import AnnualGDPTrend from './component/GDP/AnnualGDPTrend'
import Gdp2 from './component/GDP/Gdp2'
import Gdp3 from './component/GDP/Gdp3'
import Gdp4 from './component/GDP/Gdp4'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Sidebar />}>
    <Route path='/dashboard' element={<Dashboard2 />} />
    <Route path='/GDP' element={< GDP/>} />
    <Route path='/GrossValueAdded' element={< Gross_Value_Added/>} />
    <Route path='/GrossIndustrialUsage' element={< Gross_Industrial_Usage/>} />
    <Route path='/GFCF' element={< GFCF/>} />
    <Route path='/Key_Aggregates_National_Account' element={< Key_Aggregates_National_Account/>} />
    <Route path='/StatewiseComparison' element={< Statewise_Comparison/>} />
    <Route path='/StatisticalAnalysis' element={< Statistical_Analysis/>} />
    <Route path='/gdp/AnnualGDPTrend' element={< AnnualGDPTrend/>} />
    <Route path='/gdp/gdp2' element={< Gdp2/>} />
    <Route path='/gdp/gdp3' element={< Gdp3/>} />
    <Route path='/gdp/gdp4' element={< Gdp4/>} />
    </Route>


    </Routes>
    </BrowserRouter>
    
  )
}

export default App
