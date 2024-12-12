
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationExperience from './components/EducationExperience';
import ScrollToTop from './components/scroll-top';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>

    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Hero/>
          <EducationExperience />
          <Skills/>
          <Projects/>
          <ScrollToTop />
          <ToastContainer/>
    </main>
  </>
  );
}

export default App;
