import GlobalStyled from "./GlobalStyled"
import { Header } from "./components/header/header"
import { About } from "./components/aboutMe/About"
import { Projetos } from "./components/Projetos/Projetos"
import { Tecnologias } from "./components/Tecnologias/Tecnologias"
import { Contato } from "./components/Contato/Contato"

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <About />
      <Projetos />
      <Tecnologias />
      <Contato /> 
    </>
  )
}

export default App
