import './App.css';
import Navbar from './components/Navbar2';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Carrito from './components/pages/Carrito';
import FaQ from './components/pages/FaQ';
import Rutinas from './components/pages/Rutinas';
import Product from './components/pages/Product';

function App() {
  // useDarkMode();
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/faq' component={FaQ} />
          <Route path='/carrito' component={Carrito} />
          <Route path='/rutinas' component={Rutinas} />
          <Route path='/producto' component={Product} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
