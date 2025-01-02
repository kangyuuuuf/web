import logo from './logo.svg';
import './App.css';
import LandPage from './components/langPage/landPage'
import Navigate from './components/navigate/navigate';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
        <p>
        Still renovating the site, please come back later!
        </p>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/navigate" element={<Navigate  />} />
        </Routes>
    </Router>
  );
}

export default App;
