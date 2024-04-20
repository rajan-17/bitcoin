
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Day from './pages/Day';
import Footer from './comp/Footer';
import Header from './comp/Header';
import Week from './pages/Week';
import Month from './pages/Month';
import Year from './pages/Year';



function App() {
  return (



    <div className="App">
      
        <div className='main-body'>
          <div className="noch"></div>
          <div className="mic"></div>
          <div className="cam"></div>

          <div className="mutebtn"></div>
          <div className="volup"></div>
          <div className="voldown"></div>
          <div className="power"></div>
          
      <div className='innerbody'>
      <Header/>

      
      <Router>
       
        <Routes>
          
          <Route exact path='/' element={<Week/>}></Route>
          <Route exact path='Day' element={<Day/>}></Route>
          <Route exact path='month' element={<Month/>}></Route>
          <Route exact path='year' element={<Year/>}></Route>
         


        </Routes>
      </Router>
      <Footer/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
