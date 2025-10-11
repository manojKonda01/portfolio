import './App.css'
import Home from './pages/Home'
import CustomCursor from './components/CustomCursor'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
