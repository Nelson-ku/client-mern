import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
//importing the pages components

function App() {
  return (
    <div className="App">
      {/*anything that needs routing*/}
      <Router>
      <Navbar/>
          <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
