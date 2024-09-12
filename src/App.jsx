import { useEffect } from 'react';
import './App.css'
import { Page } from './composants/pages/Page'
import './index.css'
import AOS from 'aos'; 
import "aos/dist/aos.css"; 

function App() {
  useEffect(()=>{
      AOS.init();
      AOS.refresh(); 
  }, [])

  return (
    <>
     <Page/>
    </>
  )
}

export default App
