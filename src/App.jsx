import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Blog from "./pages/BLog"
import Map from "./pages/Map"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Blog />}/>
          <Route path="/map" element={<Map />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
