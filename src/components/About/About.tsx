import { AboutTesteCss } from "./AboutStyle";
import ImgComputer from "../../assets/about/Computer.jpg";
import PageTitle from "../PageTitle";

export function AboutMe(){
    return(
        <div className="w-screen h-[70vh] flex justify-center items-center bg-white screen-1024:h-auto">
            <div className="max-w-[1024px] w-full h-full flex gap-[50px] screen-1024:gap-4 screen-1024:flex-col screen-1024:items-center" id="AboutMeScroll">
                <div className="flex items-center">
                    <img className="w-[450px] h-[400px] max-w-none rounded-lg" src={ImgComputer} alt="" />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <PageTitle title="Sobre Mim" subTitle="ou um Desenvolvedor Full-Stack, com mais de 4 anos de experiência 📍" />
                    {/* <span>Sobre Mim</span>

                    <h3>Sou um Desenvolvedor Full-Stack, com mais de 4 anos de experiência 📍</h3> */}
                    <p className="text-[#767676] text-[17px] font-normal leading-[1.5] m-[10px]">
                        Comecei minha jornada no mundo do Desenvolvimento ou Programação em 2019 em um Curso Técnico,
                        onde comecei aprendendo C#, graças a esse curso aprendi um pouco sobre Lógica de Programação.  
                    </p>
                    <p className="text-[#767676] text-[17px] font-normal leading-[1.5] m-[10px]">
                        Logo depois, em 2020, prossegui meus estudos em uma plataforma de cursos online  
                        <a className="text-[#147efb]" href="https://b7web.com.br/fullstack/" target="_blank"> B7Web</a>, lá consegui aprender várias 
                        tecnologias como: PHP, React, Typescript, HTML, CSS é mais algumas tecnologias. 
                    </p>
                    <p className="text-[#767676] text-[17px] font-normal leading-[1.5] m-[10px]">
                        Trabalhei para a <a className="text-[#147efb]" href="https://www.incentea.com/pt/home" target="_blank">InCentea</a>, é um grupo de empresas que presta 
                        serviços profissionais nas áreas de Tecnologia da Informação e Comunicação, Marketing e Inovação, e Engenharia de Produto.
                    </p>
                </div>
            </div>
        </div>
    )
}