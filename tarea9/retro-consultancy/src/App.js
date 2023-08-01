import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/menu';
import Slider from './components/slider';
import Pilares from './components/pilares';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Route exact path="/" component={Slider} />
        <Route exact path="/" component={Pilares} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
