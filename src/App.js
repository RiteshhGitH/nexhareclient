import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Jordan from "./Jordan"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Jordan" element={<Jordan/>} />

    </Routes>
    </BrowserRouter>

  )
}

export default App
