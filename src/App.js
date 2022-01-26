import './App.css'
import NavTabs from './components/Header/Header';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App(){
  return(
    <div className="App" >
      <NavTabs/>
       <About/>
       <Project/>
      <Contact/>
      <Footer/> 
    </div>
  )
}
export default App;