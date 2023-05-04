import { AboutTesteCss } from "./AboutStyle"

import Computer from "../../assets/about/Computer.jpg"


export function AboutTeste(){
    return(
        <AboutTesteCss>
                <div className="about-container">
                    <div className="about-image">
                        <img src={Computer} alt="" />
                    </div>
                    <div className="about-info">
        
                        <span>Sobre Min</span>

                        <h3>Sou um Desenvolvedor FullStack, com mais de 4 anos de Experiencia 📍</h3>

                        <p>Comecei minha jornada no mundo do Desenvolvimento ou Programação em 2019 em um Curso Tecnico, onde comecei aprendendo C#, graças a esse curso aprendi um pouco sobre Logica de Progamação. </p>

                        <p>Logo depois em 2020 prossegui meus estudos em uma plataforma de cursos online <a href="https://b7web.com.br/fullstack/" target="_blank">B7Web</a>, lá consegui aprender varias tecnologias como: PHP, React, Typescript, HTML, CSS é mais algumas tecnologias. </p>

                        <p>Trabalhei para a <a href="https://www.incentea.com/pt/home" target="_blank">InCentea</a>, é um grupo de empresas que presta serviços profissionais nas áreas de Tecnologia da Informação e Comunicação, Marketing e Inovação, e Engenharia de Produto.</p>

                    </div>

                </div>

        </AboutTesteCss>
    )
}