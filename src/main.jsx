import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home'
import { Search } from './components/index'
import {Upcoming, Popular, Top, Detail, NotFound} from '../src/Pages/index'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path='/popular' element={<Popular />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/top' element={<Top />} />
          <Route path='/details/:searchId?/:id' element={<Detail />} />
          <Route path='/search/:id' element={<Search />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </>,
)
