import { HomeCss } from './HomeStyle'
import AOS from 'aos'
import { useEffect } from "react"

import imgAbout from "../../assets/aboutMe/ImgAbout.png"
import imgHTML from "../../assets/aboutMe/HTML.png"
import imgCSS from "../../assets/aboutMe/CSS.png"
import imgJavascript from "../../assets/aboutMe/Javascript.png"
import imgTypescript from "../../assets/aboutMe/Typescript.png"
import imgReactIcon from "../../assets/aboutMe/React.png"
import imgPHP from "../../assets/aboutMe/PHP.png"
import imgNode from "../../assets/aboutMe/Node.png"
import Resume from "../../assets/resume.pdf"

export function Home(){
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);
    
    return(
        <HomeCss>
            <div className="home-container" data-aos="fade-up">

                <div className="home-content">
                    <div className="home-info">
                        <h1>
                            Desenvolvedor Web Full-Stack 
                            <img src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="" />
                        </h1>
                        <span>Olá! Me chamo João Vitor, um desenvolvedor Full-Stack Web, com mais de 4 anos de experiência! 📍</span>

                        <div className="home-links">
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/" target="_blank" title="Linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/JoaoVitorHz" target="_blank" title="GitHub"><i className="fa-brands fa-github"></i></a>
                            <a href={Resume} download="Currículo João Vitor" title="Baixar Curriculo"><i className="fa-solid fa-file-arrow-down"></i></a>
                        </div>
                    </div>

                    <div className="home-image">
                        <img src={imgAbout} alt="" />
                    </div>
                </div>

                <div className="home-technology">
                    <span>Conhecimentos Principais</span>

                    <div className="home-technology-itens">
                        <div><img src={imgHTML} alt="" /></div>
                        <div><img src={imgCSS} alt="" /></div>
                        <div><img src={imgJavascript} alt="" /></div>
                        <div><img src={imgTypescript} alt="" /></div>
                        <div><img src={imgReactIcon} alt="" /></div>
                        <div><img src={imgPHP} alt="" /></div>
                        <div><img src={imgNode} alt="" /></div>
                    </div>
                </div>                 
            </div>
        </HomeCss>
    )
}