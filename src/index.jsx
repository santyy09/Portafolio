import ReactDOMClient from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


const $root = document.querySelector('#root')
const root = ReactDOMClient.createRoot($root)

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

