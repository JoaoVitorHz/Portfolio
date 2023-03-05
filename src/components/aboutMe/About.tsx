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
                    <span>Sou um programador com mais de 4 anos de experiência. Atualmente trabalho para uma empresa que atual em mais de 10 países na América do Sul e Europa. Estou sempre concentrado na Experiência do Usuário e performance para atingir altos níveis de qualidade. </span>
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