import { AboutCss } from "./AboutStyle"
import AOS from 'aos'
import React, { useEffect } from "react"

import imgAbout from "../../assets/aboutMe/ImgAbout.png"
import HTML from "../../assets/aboutMe/HTML.png"
import CSS from "../../assets/aboutMe/CSS.png"
import Javascript from "../../assets/aboutMe/Javascript.png"
import Typescript from "../../assets/aboutMe/Typescript.png"
import ReactIcon from "../../assets/aboutMe/React.png"
import PHP from "../../assets/aboutMe/PHP.png"
import Node from "../../assets/aboutMe/Node.png"
import Resume from "../../assets/resume.pdf"



export function About(){
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);
    
    return(
        <AboutCss>
            <div id="SobreMinScroll" className="about-container" data-aos="fade-up">

                <div className="about-content">
                    <div className="about-info">
                        <h1>Desenvolvedor Web FullStack <img src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="" /></h1>
                        <span>Olá! Me chamo João Vitor, um desenvoledor FullStack Web, com mais de 4 anos de experiencia! 📍</span>

                        <div className="about-links">
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/" target="_blank" title="Linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/JoaoVitorHz" target="_blank" title="GitHub"><i className="fa-brands fa-github"></i></a>
                            <a href={Resume} download="Currículo João Vitor" title="Baixar Curriculo"><i className="fa-solid fa-file-arrow-down"></i></a>
                        </div>
                    </div>

                    <div className="about-image">
                        <img src={imgAbout} alt="" />
                    </div>
                </div>

                <div className="about-technology">
                    <span>Conhecimentos Principais</span>

                    <div className="about-technology-itens">
                        <div><img src={HTML} alt="" /></div>
                        <div><img src={CSS} alt="" /></div>
                        <div><img src={Javascript} alt="" /></div>
                        <div><img src={Typescript} alt="" /></div>
                        <div><img src={ReactIcon} alt="" /></div>
                        <div><img src={PHP} alt="" /></div>
                        <div><img src={Node} alt="" /></div>
                    </div>
                </div>                 

            </div>
        </AboutCss>
    )
}