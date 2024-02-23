import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Component/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from './Component/SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/search"
          element={<SearchPage/>} 
          />
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
