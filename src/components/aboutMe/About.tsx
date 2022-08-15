import { AboutCss } from "./AboutStyle"
import a from "../../assets/aboutMe/Notebook.png"

export function About(){
    return(
        <AboutCss>
            <div className="about-bg">
                <div className="aboutLeftSide">
                    <h1>João Vitor</h1>
                    <h2>Desenvolvedor FullStack</h2>
                    <span>Olá me chamo João Vitor, tenho 18 anos, moro em São Paulo, comecei no Desenvolvimento/Programação aos 15 anos em um curso Tecnico de T.I.<br/><br />Tenho quase 4 anos de experiencia, por isso tenho conhecimento com bastantes tecnologias, mas as tecnologias que domino são: PHP, React, Typescript, JavaScript, HTML e CSS.</span>
                </div>
                <div className="aboutRightSide">
                    <img src={a} alt="" />
                </div>
            </div>
        </AboutCss>
    )
}