import About from "@/components/about";
import Home from "@/components/home";
// import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function App() {
  return (
    <div id="app">
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Home></Home>
    </div>
  );
}
