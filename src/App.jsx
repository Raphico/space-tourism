import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/Home/Home"
import Destination from "./pages/Destination/Destination"
import Crew from "./pages/Crew/Crew"
import Technology from "./pages/Technology/Technology"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar/Navbar"
import BackgroundSetter from "./components/BackgroundSetter"

function App() {
  return (
    <Router>
      <BackgroundSetter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BackgroundSetter>
    </Router>
  )
}

export default App