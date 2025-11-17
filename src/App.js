import logo from './logo.svg';
import './App.css';
import LandPage from './components/langPage/landPage'
import Navigate from './components/navigate/navigate';
import ResearchPage from './components/research/research';
import SnakePage from './components/snakePage/snakePage';
import Details from './components/details/details';
import Chat from './components/chat/chat';
import { ThemeProvider } from './contexts/ThemeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <ThemeProvider>
      <Router>
          <Routes>
            <Route path="/" element={<LandPage />} />
            <Route path="/navigate" element={<Navigate  />} />
            <Route path='/details/*' element={<Details />} />
            <Route path="*" element={<SnakePage/> } />
            {/* <Route path="/chat" element={<Chat />} /> */}
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
