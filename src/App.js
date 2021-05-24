import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav'
import Header from "./components/Header"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
