import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './components/Header'
import Particles from 'react-particles-js';
const App = () => {
  return (
    <div className="App">
      <Particles
        className="particle-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#c70796"
              }
            }
          }
        }}

      />
      <Navbar />
      <Header />
      <h2>Portfolio</h2>
    </div>
  );
}

export default App;
