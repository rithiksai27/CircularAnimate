import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl"; // Import the Cyl component
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <div>
        <h1 className="heading">Where Creativity Meets Project Goals: Dive Into My Works</h1>
        <h4 className="smallheading">Where Ideas Collide with Discovery</h4>
      </div>
      <Canvas flat camera={{ fov: 20 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            intensity={400.0} // The bloom intensity.
            luminanceThreshold={0.9} // Luminance threshold.
            luminanceSmoothing={2} // Smoothness of the luminance threshold.
          />
        </EffectComposer>
      </Canvas>
      <div className="button-container">
  <a href="https://rithiksaiportfolio.vercel.app/" className="portfolio-button" target="_blank" rel="noopener noreferrer">Explore My Portfolio</a>
</div>



    </>
  );
};

export default App;
