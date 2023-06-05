import {Route, BrowserRouter, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Search from "./pages/Search"
import Blog from "./pages/Blog"
import Navbar from "./components/Navbar"

function App() {

  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<Search />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
