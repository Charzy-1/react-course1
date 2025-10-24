import { Routers, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Routers>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='checkout' element={<div>Just a test page</div>}></Route>
    </Routers>
    
  )
}

export default App
