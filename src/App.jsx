
import Aboutme from './components/Layouts/About/Aboutme'
import { Header } from './components/Layouts/Header/Header'
import Project from './components/Layouts/Project/Project'
import Home from './components/Pages/Home'
import './index.css'

function App() { 

  return (
    <>
    <Header/>
      <Home/>
      <Aboutme/>
      <Project/>
    </>
  )
}

export default App
