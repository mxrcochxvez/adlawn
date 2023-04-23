import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Splash from "./components/Splash";
import { Helmet } from "react-helmet";
import YTVideos from "./components/YTVideos";

function App() {
  return (
    <div>
      <Helmet>
        <title>Andre's Lawn Care - Lawncare services you can trust</title>
        <meta
          name="description"
          content="Lawncare service that will exceed your expectations. We offer plenty of services that will have your yard looking excellen!"
        />
        <meta name="title" content="Andre's Lawn Care" />
        <meta name="author" content="Marco Chavez" />
      </Helmet>
      <Splash />
      <Services />
      <Contact />
      <Gallery />
      <YTVideos />
      <Footer />
    </div>
  );
}

export default App;
