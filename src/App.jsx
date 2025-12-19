import { BrowserRouter , Routes , Route , Link } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import ScrollToTopProgress from "./Component/ScrollToTopProgress"
import ErrorPage from "./Component/ErrorPage"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element= {<Home />} />
      <Route path="/about" element= {<About />} />
      <Route path="/gallery" element= {<Gallery />} />
      <Route path="/services" element= {<Services />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
    <ScrollToTopProgress />
    </>
  )
}

export default App
