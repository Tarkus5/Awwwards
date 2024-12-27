import Hero from './components/Hero'
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero className="relative min-h-screen w-screen overflow-x-hidden" />
        <About />
    </main>
  )
} 

export default App
