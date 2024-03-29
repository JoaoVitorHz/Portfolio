import { ProjectCss } from "./ProjectStyle"

import Shortly from "../../assets/projetos/ShortlyThumb.jpg"
import BrindeEuropa from "../../assets/projetos/BrindeEuropaThumb.jpg"
import Hunddle from "../../assets/projetos/HuddleThumb.jpg"
import MoviesApp from "../../assets/projetos/MoviesApp.jpg"
import PageTitle from "../PageTitle"

interface Data {
    titulo: string,
    link: string,
    imgPath: string, 
    desc: string,
    repository: string,
}

export function Project() {
    const dataProject: Array<Data> = [

        {titulo: "Movies Fx ", link: "https://extraordinary-froyo-c2ed82.netlify.app/", repository:"https://github.com/JoaoVitorHz/Shortly", imgPath: MoviesApp, desc:"Acesse um Catálogo de Filmes e series criado por min, no sistema você consegue tomar conhecimento dos filmes mais populares, com maior nota, em estreia no cinema entre outros filtros."},

        {titulo: "Shortly", link: "https://bespoke-biscotti-a22532.netlify.app", repository:"https://github.com/JoaoVitorHz/Shortly", imgPath: Shortly, desc:"Uma das primeiras landing Pages que criei para mostrar minhas habilidades com React, Typescript, Styled-Components, Radix Ui e HTML. Achei o Layout em site chamado FrontendMentor onde tem muitos layouts criados por alguns Ui/Ux's"},
     
        {titulo: "Hunddle", link: "https://dainty-muffin-9dd923.netlify.app", repository:"https://github.com/JoaoVitorHz/Shortly", imgPath: Hunddle, desc:"Essa aplicação foi feita utilizando React, Typescript, Styled-Components, Radix Ui, HTML e CSS. Peguei o Desing do site em um site chamado FrontendMentor."},

        {titulo: "Um Brinde na Europa", link: "https://whimsical-torrone-53cd31.netlify.app", repository:"https://github.com/JoaoVitorHz/Shortly", imgPath: BrindeEuropa, desc:"Uma Landing Page bonita é responsiva feita com React, Typescript, Styled-Components, HTML e CSS. O Layout foi feito em um site chamado FrontendMentor"}
    ]

    let count = 0;

    return(
        <ProjectCss>

            <div id="ProjetosScroll" className="teste-bg" > 

                <PageTitle title="Portfólio" subTitle="Cada projeto é uma peça única de desenvolvimento 🧩" />
                
                <div className="project-container">
                    {dataProject.map((element) =>{

                        count ++;
                        let alignmentProject = "projeto-content";
                        
                        if(count % 2 == 0)
                        alignmentProject = alignmentProject + " invertPosition";
                            
                        return(
                            <div className={alignmentProject}>

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

        </ProjectCss>
    )
}
