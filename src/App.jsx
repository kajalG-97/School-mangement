import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { SignIn } from './components/SignIn'
import { HomeNav } from './components/HomeNav'
import { MainHome } from './components/mainHome'
import {SearchTeacherInfo} from './components/searchByTeacher'
import { EditClass } from './components/EditClass'

function App() {

  return (
    <div className="App">
      <HomeNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/mainHome" element={<MainHome />} />
        <Route path="/searched" element={<SearchTeacherInfo />} />
        <Route path="/classes/:id" element={<EditClass/>}/>
      </Routes>
    </div>
  )
}

export default App
