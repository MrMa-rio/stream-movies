import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import Details from './Pages/Details'
import All_Movies from './Pages/All-movies'
import All_Popular from './Pages/All_popular'
import All_Top from './Pages/All_top_movies'
import NavBar from './Pages/NavBar/Navigation'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './index.css'
import Detail from './Pages/Detail'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path='/all_popular/' element={<All_Popular name='Popular' />} />
          <Route path='/all_movies/' element={<All_Movies name='Movies' />} />
          <Route path='/all_top/' element={<All_Top name='Top Movies' />} />
          <Route path='/details/:id' element={<Detail />}/>
        </Routes>

      </div>
      
    </Router>
  </React.StrictMode>,
)
