// import Home from "./pages/Home";
// import Crew from "./pages/Crew";
// import Destination from "./pages/Destination";
// import Tecnology from "./pages/Tecnology";
import "./app.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/header";


const App = () => {
  return (
    <Router>
      <Header/>
      <main>
        <Routes />
      </main>
    </Router>
  );
};
export default App;
