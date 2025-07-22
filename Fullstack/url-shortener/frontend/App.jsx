import "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './getInput.jsx'
import './short.jsx'

function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<getInput />}></Route>
    <Route path="/out" element={<short />}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
