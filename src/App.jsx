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
import Gfcf1 from './component/GFCF/Gfcf1'
import Gfcf2 from './component/GFCF/Gfcf2'
import Gfcf3 from './component/GFCF/Gfcf3'
import Gfcf4 from './component/GFCF/Gfcf4'
import Gfcf6 from './component/GFCF/Gfcf6'
import Gfcf15 from './component/GFCF/Gfcf5'
import GAV1a from './component/GrossValueAdded/one/GAV1a'
import GVA1b from './component/GrossValueAdded/one/GVA1b'
import Kana1 from './component/kana/kana1'
import Kana2 from './component/kana/kana2'
import Kana3 from './component/kana/kana3'
import Kana4 from './component/kana/Kana4'
import Kana5 from './component/kana/Kana5'
import Kana6 from './component/kana/Kana6'
import Kana7 from './component/kana/kana7'
import Kana8 from './component/kana/Kana8'
import Kana9 from './component/kana/Kana9'

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
    <Route path='/gfcf1' element={< Gfcf1/>} />
    <Route path='/gfcf2' element={< Gfcf2/>} />
    <Route path='/gfcf3' element={< Gfcf3/>} />
    <Route path='/gfcf4' element={< Gfcf4/>} />
    <Route path='/gfcf5' element={< Gfcf15/>} />
    <Route path='/gfcf6' element={< Gfcf6/>} />
    <Route path='/gva1a' element={< GAV1a/>} />
    <Route path='/gva1b' element={< GVA1b/>} />
    <Route path='/kana1' element={< Kana1/>} />
    <Route path='/kana2' element={< Kana2/>} />
    <Route path='/kana3' element={< Kana3/>} />
    <Route path='/kana4' element={< Kana4/>} />
    <Route path='/kana5' element={< Kana5/>} />
    <Route path='/kana6' element={< Kana6/>} />
    <Route path='/kana7' element={< Kana7/>} />
    <Route path='/kana8' element={< Kana8/>} />
    <Route path='/kana9' element={< Kana9/>} />
    
    </Route>


    </Routes>
    </BrowserRouter>
    
  )
}

export default App
