import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Jordan from "./jordan"
import Tower from "./tower";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Jordan" element={<Jordan/>} />
        <Route path= "tower" element={<Tower/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
