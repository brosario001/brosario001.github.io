import './App.css';
import eminem from './img/Eminem.png';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Eminem(){
  return(
      <img 
        src={eminem}
        alt=""
        className="eminem"
      />
  )
}

function App() {
  return (
    <div class = "App">
      <Eminem/>

      <Parallax pages = {3}>

        <ParallaxLayer offset={.2} speed={.05} >
          <h1 className = "AlbumName">Real SlimShady</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.05} factor={1.5}>
          <h2>TEXT LAYER 1</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.05} factor={3}>
          <h2>TEXT LAYER 2</h2>
        </ParallaxLayer>
      </Parallax>
      
    </div>
  );
}
export default App;
