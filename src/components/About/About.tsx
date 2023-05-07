import { AboutTesteCss } from "./AboutStyle";
import ImgComputer from "../../assets/about/Computer.jpg";

export function AboutMe(){
    return(
        <AboutTesteCss>
            <div className="about-container" id="AboutMeScroll">
                <div className="about-image">
                    <img src={ImgComputer} alt="" />
                </div>

                <div className="about-info">
                    <span>Sobre Mim</span>

                    <h3>Sou um Desenvolvedor Full-Stack, com mais de 4 anos de experiência 📍</h3>
                    <p>
                        Comecei minha jornada no mundo do Desenvolvimento ou Programação em 2019 em um Curso Técnico,
                        onde comecei aprendendo C#, graças a esse curso aprendi um pouco sobre Lógica de Programação.  
                    </p>
                    <p>
                        Logo depois, em 2020, prossegui meus estudos em uma plataforma de cursos online 
                        <a href="https://b7web.com.br/fullstack/" target="_blank">B7Web</a>, lá consegui aprender várias 
                        tecnologias como: PHP, React, Typescript, HTML, CSS é mais algumas tecnologias. 
                    </p>
                    <p>
                        Trabalhei para a <a href="https://www.incentea.com/pt/home" target="_blank">InCentea</a>, é um grupo de empresas que presta 
                        serviços profissionais nas áreas de Tecnologia da Informação e Comunicação, Marketing e Inovação, e Engenharia de Produto.
                    </p>
                </div>
            </div>
        </AboutTesteCss>
    )
}