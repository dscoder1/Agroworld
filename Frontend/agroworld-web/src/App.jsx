  
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Products from './components/Products'
import Contact from './components/Contact'
import Sellseed from './components/Sellseed'
import Sellcrop from './components/Sellcrop'
import Sellvegetable from './components/Sellvegetable'
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/product' element={<Products/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/sellseeds' element={<Sellseed/>}/>
<Route path='/sellcrop' element={<Sellcrop/>}/>
<Route path='/sellvegetable' element={<Sellvegetable/>}/>
</Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App
