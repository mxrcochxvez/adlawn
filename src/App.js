import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Splash from "./components/Splash";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Andre's Lawn Care</title>
        <meta name="description" content="Website for Andre's Lawn Care." />
        <meta name="title" content="Andre's Lawn Care"/>
        <meta name="author" content="Marco Chavez"/>
      </Helmet>
      <Splash />
      <Services />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
