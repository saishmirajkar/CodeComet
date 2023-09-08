import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
//import Work from './components/Work';
import Dev from './components/Dev';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Services />
      <Dev />
      <Contact />
    </div>
  );
}

export default App;
