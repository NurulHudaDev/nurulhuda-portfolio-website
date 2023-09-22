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
import Footer from './Components/Footer/Footer';
import { createContext, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export const themeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme((curr) => (curr == 'dark' ? 'light' : 'dark'));
  };

  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <div>
      <themeContext.Provider value = {{theme, toggleTheme}}>
        <div id={theme}>
      <NavProvider>
        <Header toggleTheme={toggleTheme} />
        <Home />
        <About />
        <Services />
        <Skills />
        <Summary />
        <Projects />
        <Contact />
      </NavProvider>
      <Footer />
      </div>
      </themeContext.Provider>
    </div>
  );
}

export default App;
