
import './index.css'

import { Header } from "./components/header/header"
import { Home } from "./components/Home/Home"
import { AboutMe } from "./components/About/About"
import { Project } from "./components/Project/Project"
import { Tecnologias } from "./components/Tecnologias/Tecnologias"
import { Contato } from "./components/Contato/Contato"

import { Work } from "./page/work/Work"

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <AboutMe />
      <Project/>
      <Tecnologias />
      <Contato /> 
    </>
  )
}

export default App
