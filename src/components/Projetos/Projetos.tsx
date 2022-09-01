import { ProjetosCss } from "./ProjetosStyle"
import LandiPageReact from "../../assets/projetos/LandingPageReact.png"
import ContatosMvc from "../../assets/projetos/ContatosMVC.png"
import Tintas from "../../assets/projetos/Tintas.png"
import Shortly from "../../assets/projetos/Shortly.png"
import EmBreve from "../../assets/projetos/EmBreve.png"
import Huddle from "../../assets/projetos/Huddle.png"

export function Projetos(){
    return(
        <ProjetosCss>
            <h1>Projetos</h1>
            <div className="projetos-bg">
                <div className="projetos">
                    <h2>Frontend</h2>
                    <div className="projetosItem-bg">
                        <div className="projetosItem">
                            <img src={Shortly} alt="" />
                            <a href="https://bespoke-biscotti-a22532.netlify.app/" target="_blank">Shortly</a>
                        </div>
                        <div className="projetosItem">
                            <img src={LandiPageReact} alt="" />
                            <a href="https://whimsical-torrone-53cd31.netlify.app" target="_blank">Um Brinde na Europa</a>
                        </div>
                        <div className="projetosItem embreve">
                            <img src={Huddle} alt="" />
                            <a href="https://dainty-muffin-9dd923.netlify.app/" target="_blank">Huddle</a>
                        </div>
                    </div>
                </div>
                <div className="projetos projetosBackend">
                    <h2>Backend</h2> <span>(Links Apenas GitHub)</span>
                    <div className="projetosItem-bg">
                        <div className="projetosItem">
                            <img src={ContatosMvc} alt="" />
                            <a href="https://github.com/JoaoVitorHz/ContatosMVC" target="_blank">App Contatos </a>
                        </div>
                        <div className="projetosItem">
                            <img src={Tintas} alt="" />
                            <a href="https://github.com/JoaoVitorHz/Tinta-Area" target="_blank">Tintas</a>
                        </div>
                        <div className="projetosItem embreve">
                            <img src={EmBreve} alt="" />
                            <a>Em Breve</a>
                        </div>
                    </div>
                </div>
            </div>
        </ProjetosCss>
    )
}