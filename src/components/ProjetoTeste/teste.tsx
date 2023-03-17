import { TesteCss } from "./testeStyle"

import Shortly from "../../assets/projetos/ShortlyThumb.jpg"
import BrindeEuropa from "../../assets/projetos/BrindeEuropaThumb.jpg"
import Hunddle from "../../assets/projetos/HuddleThumb.jpg"
import MoviesApp from "../../assets/projetos/MoviesApp.jpg"



export function Teste() {
    return(
        <TesteCss>
            <h1 id="ContatoScroll">Projetos</h1>

            <div className="teste-bg" > 

                <div className="projeto-container">

                    <div className="projeto-item-esquerda">
                        <div className="projeto-item-image">
                            <a href="https://bespoke-biscotti-a22532.netlify.app" target="_blank"><img src={Shortly} alt="" /></a>
                        </div>
                    </div>

                    <div className="projeto-item-direita">
                        <div className="projeto-item-texto">

                            <div className="projeto-info">
                                <span>Shortly</span>
                            </div>

                            <ul>
                                <span>Uma das primeiras landing Pages que crei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado Frontend onde tem varios layout criados por alguns Ui/Ux's</span>
                            </ul>
                        </div>
                    </div>

                </div>


                <div className="projeto-container">
                    <div className="projeto-item-direita">
                        <div className="projeto-item-texto">
                            
                        <div className="projeto-info">
                                <span>MoviesApp</span>
                            </div>

                            <ul>
                                <span>Uma das primeiras landing Pages que crei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado Frontend onde tem varios layout criados por alguns Ui/Ux's</span>
                            </ul>
                        </div>
                    </div>

                    <div className="projeto-item-esquerda">
                        <div className="projeto-item-image">
                            <a href="https://extraordinary-froyo-c2ed82.netlify.app/" target="_blank"><img src={MoviesApp} alt="" /></a>
                        </div>
                    </div>
                </div>




              

                <div className="projeto-container">

                    <div className="projeto-item-esquerda">
                        <div className="projeto-item-image">
                            <a href="https://dainty-muffin-9dd923.netlify.app" target="_blank"><img src={Hunddle} alt="" /></a>
                        </div>
                    </div>

                    <div className="projeto-item-direita">
                        <div className="projeto-item-texto">
                          
                        <div className="projeto-info">
                                <span>Hunddle</span>
                            </div>

                            <ul>
                                <span>Uma das primeiras landing Pages que crei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado Frontend onde tem varios layout criados por alguns Ui/Ux's</span>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projeto-container">

                    <div className="projeto-item-direita">
                        <div className="projeto-item-texto">
                            
                            <div className="projeto-info">
                                <span>Um Brinde Na Europa</span>
                            </div>

                            <ul>
                                <span>Uma das primeiras landing Pages que crei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado Frontend onde tem varios layout criados por alguns Ui/Ux's</span>
                            </ul>
                        </div>
                    </div>

                    <div className="projeto-item-esquerda">
                        <div className="projeto-item-image">
                            <a href="https://whimsical-torrone-53cd31.netlify.app" target="_blank"><img src={BrindeEuropa} alt="" /></a>
                        </div>
                    </div>
                </div>
                
            </div>

        </TesteCss>
    )
}