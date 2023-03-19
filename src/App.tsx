import GlobalStyled from "./GlobalStyled"
import { Header } from "./components/header/header"
import { About } from "./components/aboutMe/About"
import { AboutTeste } from "./components/About/About"
import { Projetos } from "./components/Projetos/Projetos"
import { Tecnologias } from "./components/Tecnologias/Tecnologias"
import { Contato } from "./components/Contato/Contato"
import { Teste } from "./components/ProjetoTeste/teste"

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <About />
      <AboutTeste />
      {/* <Projetos /> */}
      <Teste/>
      <Tecnologias />
      <Contato /> 
    </>
  )
}

export default App
