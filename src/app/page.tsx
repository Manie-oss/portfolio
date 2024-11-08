import About from "@/components/aboutMe";
import Contact from "@/components/contacts";
import Experience from "@/components/experiences";
import Footer from "@/components/footers";
import Header from "@/components/header";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scrollToTopBtn";
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
