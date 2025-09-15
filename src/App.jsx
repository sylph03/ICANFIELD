import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Blog from "./pages/BLog"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Blog />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
