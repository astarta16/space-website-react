import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Tecnology from "./pages/Tecnology";
import "./app.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/tecnology" element={<Tecnology />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
