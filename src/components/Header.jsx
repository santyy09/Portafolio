import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import Burguer from '../components/Burguer'
// import logo from '../assets/img/logo.svg'
import './Header.css'

export default function Header(){
  return <header className='Header'>
    <Logo/>
    <NavBar/>
  </header>
}

function Logo(){
  return <div className='Logo'>
    <img src='/logo.svg' alt='Logo JSLH' />
  </div>
}

function NavBar(){
  const [isOpen,isOpenUpdate] = useState(false)
  
  const classNavItems = isOpen ? 'nav__items' : 'nav__items nav__items--close'

  return <nav className='NavBar'>
    <Burguer isOpen={isOpen} isOpenUpdate={isOpenUpdate}/>  
    <ul className={classNavItems}>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/functions'>Functions</NavLink></li>
      <li><NavLink to='/api'>API</NavLink></li>
    </ul>
  </nav>
}