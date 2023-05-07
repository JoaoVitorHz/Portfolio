import GlobalStyled from "./GlobalStyled"

import { Header } from "./components/header/header"
import { Home } from "./components/Home/Home"
import { AboutMe } from "./components/About/About"
import { Project } from "./components/Project/Project"
import { Tecnologias } from "./components/Tecnologias/Tecnologias"
import { Contato } from "./components/Contato/Contato"

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Home />
      <AboutMe />
      <Project/>
      <Tecnologias />
      <Contato /> 
    </>
  )
}

export default App
