import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}


export default App;
