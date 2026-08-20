import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
