import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NavProvider from './Components/Contex/NavContext';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Summary from './Components/Summary/Summary';

function App() {

  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <About />
        <Services />
        <Skills />
        <Summary />
        <Projects />
        <Contact />
      </NavProvider>
    </div>
  );
}

export default App;
