import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Functions from './pages/Functions'
import API from './pages/Api'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

export default function App(){
  return <div className='App'>
    <Header/>
    <main className='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/functions' element={<Functions/>}/>
        <Route path='/api' element={<API/>}/>
      </Routes>
    </main>
    <Footer/>
  </div>
}
