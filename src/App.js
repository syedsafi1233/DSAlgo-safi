import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Fun} from'./components/Fun';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
      <Fun/>
    </div>
  );
}

export default App;
