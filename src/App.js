import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Portfolio } from "./components/Portfolio";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
