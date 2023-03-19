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

                        <p>Comecei minha jornada no mundo do Desenvolvimento ou Programação em 2019 em um Curso Tecnico, onde comecei aprendendo C#, graças a esse curso aprendi um pouco sobre Logica de Progamação. 

                        <br/><br/>

                        Logo depois em 2020 prossegui meus estudos em uma plataforma que tem varios cursos de programação chamada <a href="https://b7web.com.br/fullstack/" target="_blank">B7Web</a>, lá consegui aprender sobre muitas Liguagens e Tecnologias diferentes como: PHP, React, Typescript, HTML, CSS é mais algumas tecnologias. 
                        <br/><br/> 

                        Atualmente trabalho para uma empresa chamada <a href="https://www.incentea.com/pt/home">InCentea</a>, uma empresa Portuguesa que esta localizade em mais de 10 paises na Europa e America do Sul.</p>

                    </div>

                </div>

        </AboutTesteCss>
    )
}