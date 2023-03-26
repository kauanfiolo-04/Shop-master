import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Shop } from './pages/Shop/Shop'
import { Cart } from './pages/Cart/Cart'

const App=()=>{
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Shop/>}/>
          <Route path='/cart'element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App