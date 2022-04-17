import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { SignIn } from './components/SignIn'
import { HomeNav } from './components/HomeNav'
import { MainHome } from './components/mainHome'
import {searchTeacherInfo} from './components/searchByTeacher'

function App() {

  return (
    <div className="App">
      <HomeNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/mainHome" element={<MainHome />} />
        <Route path="teacher/:teacher_name" element={<SearchTeacherInfo/>}/>
      </Routes>
    </div>
  )
}

export default App
