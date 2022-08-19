import { ProjetosCss } from "./ProjetosStyle"
import LandiPageReact from "../../assets/projetos/LandingPageReact.png"
import ContatosMvc from "../../assets/projetos/ContatosMVC.png"
import Tintas from "../../assets/projetos/Tintas.png"
import Caoselheiro from "../../assets/projetos/Cãoselheiro.png"

export function Projetos(){
    return(
        <ProjetosCss>
            <h1>Projetos</h1>
            <div className="projetos-bg">
                <div className="projetosFrontend">
                    <h2>Frontend</h2>
                    <div className="frontendItems">
                        <div className="frontendItem">
                            <div className="ProjetosImg">
                                <img src={LandiPageReact} alt="" />
                            </div>
                            <a href="" >Landing Page Usando React<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Uma landing Page que fiz pra praticar minhas habilidades com React</span>
                        </div>
                        <div className="frontendItem">
                        <div className="ProjetosImg">
                                <img src={Caoselheiro} alt="" />
                            </div>
                            <a href="" >Projeto 1<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Descrição do projeto</span>
                        </div>
                        <div className="frontendItem">
                        <div className="ProjetosImg">
                                <img src={LandiPageReact} alt="" />
                            </div>
                            <a href="" >Projeto 1<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Descrição do projeto</span>
                        </div>
                    </div>
                </div>
                <div className="projetosFrontend">
                    <h2>Backend</h2>
                    <div className="frontendItems">
                        <div className="frontendItem">
                            <div className="ProjetosImg">
                                <img src={ContatosMvc} alt="" />
                            </div>
                            <a href="" >Sistema de Contatos<i className="fa-solid fa-arrow-right"></i></a>
                        <span>Cadastrar, Listar, Editar e Apagar seus contatos!</span>
                        </div>
                        <div className="frontendItem">
                        <div className="ProjetosImg">
                                <img src={Tintas} alt="" />
                            </div>
                            <a href="" >Sistema de Tintas<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Sistama que te informar a quantidade necessaria de tintar para pintar uma parede</span>
                        </div>
                        <div className="frontendItem">
                        <div className="ProjetosImg">
                                <img src={LandiPageReact} alt="" />
                            </div>
                            <a href="" >Projeto 1<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Descrição do projeto</span>
                        </div>
                    </div>
                </div>
            </div>
        </ProjetosCss>
    )
}