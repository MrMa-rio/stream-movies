import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import {Upcoming} from './Pages/Upcoming'
import {Popular} from './Pages/Popular'
import {Top} from './Pages/Top'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css'
import {Detail} from './Pages/Detail'
import { Search } from './components/search/search'
import { NotFound } from './Pages/NotFound/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='w-screen'>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path='/popular' element={<Popular name='Popular' />} />
          <Route path='/upcoming' element={<Upcoming name='Upcoming_Movies' />} />
          <Route path='/top' element={<Top name='Top Movies' />} />
          <Route path='/details/:searchId?/:id' element={<Detail />} />
          <Route path='/search/:id' element={<Search />} />
          
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
)
