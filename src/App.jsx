import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/home.jsx"
import AboutUs from './pages/aboutus/AboutUs.jsx'
import PostsList from './pages/postsList/PostsList.jsx'

import DefaultLayout from './layout/DefaultLayout.jsx'

import './App.css'

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/postslist' element={<PostsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
