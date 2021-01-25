import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Carrito from './components/pages/Carrito';
import FaQ from './components/pages/FaQ';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/faq' component={FaQ} />
          <Route path='/carrito' component={Carrito} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
