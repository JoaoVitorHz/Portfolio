import { AboutCss } from "./AboutStyle"
import imgAbout from "../../assets/aboutMe/ImgAbout.png"
import AOS from 'aos'
import { useEffect } from "react"


export function About(){
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);
    
    return(
        <AboutCss>
            <div id="SobreMinScroll" className="about-bg" data-aos="fade-up">
                <div className="aboutLeftSide">
                    <h1>João Vitor</h1>
                    <h2>Desenvolvedor FullStack</h2>
                    <span>Alto nivel de experiencia no Desevolvimento Web, com mais de 3 anos de experiencia. Minhas expertises são React, Typescript, HTML, CSS, PHP, entre outras tecnologias... </span>
                    <div className="baixarCurriculo">
                        <a href="#ContatoScroll">Entre em Contato</a>
                    </div>
                </div>
                <div className="aboutRightSide">
                    <img src={imgAbout} alt="" />
                </div>
            </div>
        </AboutCss>
    )
}