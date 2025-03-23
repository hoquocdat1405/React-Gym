import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';
import Reason from './components/Reason/Reason';
import Plan from './components/Plan/Plan';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Program/>
      <Reason/>
      <Plan/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
