import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Main } from './components/Main';
import Detail from './components/Detail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path={"/"} element={<Main/>}/>
          <Route path={"/details/:id"} element={<Detail/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
