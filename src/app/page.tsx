import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scrollToTop";
import Skills from "@/components/skills";

export default function App() {
  return (
    <div id="app">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Skills></Skills>
      <Contact></Contact>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
}
