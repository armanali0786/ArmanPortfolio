import React from 'react';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar'
import Features from './components/features/Features'
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
     <div className='max-w-screen-2xl mx-auto px-16'>
     <Navbar/>
     <Banner/>
     <Features/>
     <Projects/>
     <Resume/>
     <Contact/>
     {/* <Footer/> */}
     <FooterBottom/>
     </div>
    </div>
  );
}

export default App;
