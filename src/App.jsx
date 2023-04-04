import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  
  Hero,
  Navbar,
  
  Works,
  StarsCanvas,
  EarthCanvas,
} from "./components";
import { slideIn } from "./utils/motion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
      
        <Works />
        
        <div className="relative z-0">
        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
        
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
