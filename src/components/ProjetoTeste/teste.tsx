import { TesteCss } from "./testeStyle"

import Shortly from "../../assets/projetos/ShortlyThumb.jpg"
import BrindeEuropa from "../../assets/projetos/BrindeEuropaThumb.jpg"
import Hunddle from "../../assets/projetos/HuddleThumb.jpg"
import MoviesApp from "../../assets/projetos/MoviesApp.jpg"


interface Data {
    titulo: string,
    link: string,
    imgPath: string, 
    desc: string,
    repository: string,
}


export function Teste() {

    const dataProject: Array<Data> = [
        {titulo: "Shortly", link: "https://bespoke-biscotti-a22532.netlify.app", repository:"https://github.com/JoaoVitorHz/Shortly", imgPath: Shortly, desc:"Uma das primeiras landing Pages que crei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado Frontend onde tem varios layout criados por alguns Ui/Ux's"},

        {titulo: "MoviesApp ", link: "https://extraordinary-froyo-c2ed82.netlify.app/", repository:"https://github.com/JoaoVitorHz/Shortly", imgPath: MoviesApp, desc:"Uma das primeiras landing Pages que crei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado Frontend onde tem varios layout criados por alguns Ui/Ux's"},

        {titulo: "Hunddle", link: "https://dainty-muffin-9dd923.netlify.app", repository:"https://github.com/JoaoVitorHz/Shortly", imgPath: Hunddle, desc:"Uma das primeiras landing Pages que crei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado Frontend onde tem varios layout criados por alguns Ui/Ux's"},

        {titulo: "Um Brinde na Europa", link: "https://whimsical-torrone-53cd31.netlify.app", repository:"https://github.com/JoaoVitorHz/Shortly", imgPath: BrindeEuropa, desc:"Uma das primeiras landing Pages que crei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado Frontend onde tem varios layout criados por alguns Ui/Ux's"}
    ]

    let valueProjectItemPosition = 0;

    return(
        <TesteCss>

            <div id="ProjetosScroll" className="teste-bg" > 

                <div className="header-projects">
                    <span>Portfolio</span>
                    <h3>Cada projeto é uma peça única de desenvolvimento 🧩</h3>
                </div>

                <div className="project-container">
                    {dataProject.map((element) =>{

                        valueProjectItemPosition ++;
                        let classProjectContent = "projeto-content";
                        
                        if(valueProjectItemPosition % 2 == 0)
                        classProjectContent = classProjectContent + " invertPosition";
                            
                        return(
                            <div className={classProjectContent}>

                                <div className="projeto-item-image">
                                    <a href={element.link} target="_blank"><img src={element.imgPath} alt="" /></a>
                                </div>
        
                                <div className="projeto-item-texto">
        
                                    <div className="project-info-title">
                                        <span>{element.titulo}</span>
                                    </div>
        
                                    <div className="project-info-desc">
                                        <span>{element.desc}</span>
                                    </div>

                                    <div className="project-info-links">
                                        <a href={element.repository} target="_blank" title="GitHub">Code<i className="fa-brands fa-github"></i></a>
                                        <a href={element.link} target="_blank" title="Acessar Site">Acesse o Site<i className="fa-solid fa-up-right-from-square"></i></a>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                
            </div>

        </TesteCss>
    )
}