import logo from './logo.svg';
import './App.css';
import LandPage from './components/langPage/landPage'
import Navigate from './components/navigate/navigate';
import ResearchPage from './components/research/research';
import SnakePage from './components/snakePage/snakePage';
import Details from './components/details/details';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/navigate" element={<Navigate  />} />
          <Route path='/details/*' element={<Details />} />
          <Route path="*" element={<SnakePage/> } />
        </Routes>
    </Router>
  );
}

export default App;
