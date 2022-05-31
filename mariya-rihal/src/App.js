import HomePage from './components/HomePage';
import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <div className="mainCountainer">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
