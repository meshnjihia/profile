import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home/>
        <About/>
        <Skills />
        <Qualification/>
        <Services />
        <Portfolio/>
        <Testimonials />
        <Contact/>
      </main>
      <ScrollUp/>
      <Footer />
    </>
  );
}

export default App;
