import './App.css';
import eminem from './img/Eminem.png';
import albumCover from './img/realSlimShadyAlbum.png';
import merchShirt from './img/merch_shirt.png';

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

function AlbumCover(){
  return(
    <a href="">
      <img
        src={albumCover}
        alt=""
        className = "albumCover"
      />
    </a>
  )
}

function MerchShirt(){
  return(
    <a href="">
      <img
        src={merchShirt}
        alt=""
        className = "merchShirt"
      />
    </a>
  )
}

function App() {
  return (
    <div class = "App">
      <Eminem/>

      <Parallax pages = {3}>

        <ParallaxLayer className='layer1' offset={0} speed={.05} factor={0.5}>
          <h1 className = "AlbumName">Real SlimShady</h1>
        </ParallaxLayer>

        <ParallaxLayer className='layer2' offset={0.35} speed={0.05} factor={1}>
          <AlbumCover/> 
          <MerchShirt/>
        </ParallaxLayer>

        <ParallaxLayer className= 'layer3' offset={1.35} speed={0.05} factor={1}>
          <h2>TEXT LAYER 2</h2>
        </ParallaxLayer>

      </Parallax>
      
    </div>
  );
}
export default App;
