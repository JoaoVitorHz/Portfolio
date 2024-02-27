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
        <div className='w-screen h-screen flex justify-center items-center flex-col p-[15px] bg-[#f9f9f9] screen-1280:h-[130vh] screen-768:min-h-[100vh] screen-768:h-auto'>
            <div className="max-w-[1024px] w-full h-full mt-[200px] screen-1368:mt-[100px] screen-800:max-w-[none]" data-aos="fade-up">
                <div className="flex items-center w-full screen-800:flex screen-768:flex screen-768:flex-col screen-768:items-center">
                    <div className="screen-800:w-[40%] screen-768:w-full screen-768:flex screen-768:flex-col screen-768:items-center">
                        <h1 className='text-[#2d2e32] text-[55px] font-semibold leading-[1.2] my-5 w-[500px] screen-1280:text-[40px] screen-1280:mb-[10px] screen-800:text-[30px] screen-800:w-[320px] screen-768:text-[30px] screen-768:my-20px screen-768:w-[300px]'>
                            Desenvolvedor Web Full-Stack 
                            <img className='relative w-[60px] align-middle screen-800:w-[40px]'
                                src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" 
                                alt="" 
                            />
                        </h1>
                        <span 
                            className='w-[500px] block text-[#767676] text-[18px] font-medium leading-[1.6] screen-800:w-[350px] screen-800:text-[18px] screen-768:w-[300px]'>
                            Olá! Me chamo João Vitor, um desenvolvedor Full-Stack Web, com mais de 4 anos de experiência! 📍
                        </span>

                        <div className="w-[500px] flex gap-5 mt-[25px] screen-768:w-[270px]">
                            <a className='text-[#2d2e32] text-[28px] hover:text-[#147efb] transition-[300ms]' href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/" target="_blank" title="Linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            <a className='text-[#2d2e32] text-[28px] hover:text-[#147efb] transition-[300ms]' href="https://github.com/JoaoVitorHz" target="_blank" title="GitHub"><i className="fa-brands fa-github"></i></a>
                            <a className='text-[#2d2e32] text-[28px] hover:text-[#147efb] transition-[300ms]' href={Resume} download="Currículo João Vitor" title="Baixar Curriculo"><i className="fa-solid fa-file-arrow-down"></i></a>
                        </div>
                    </div>

                    <div className='flex justify-center w-[50%] screen-800:w-[250px] screen-800:h-[250px]'>
                        <img className="w-[350px] h-[350px] max-w-none" src={imgAbout} alt="" />
                    </div>
                </div>

                <div className="w-full flex items-center mt-[100px]  screen-1280:mb-[50px] screen-768:flex-col">
                    <span className='border-r-2 border-solid border-[rgba(45,46,50,.5)] text-[#2d2e32] font-semibold mr-[70px] pr-[20px] screen-768:border-r-0 screen-768:mr-0 screen-768:pr-0 screen-768:my-[30px]'>Conhecimentos Principais</span>

                    <div className="flex gap-[25px] screen-800:gap-[15px] screen-768:grid screen-768:grid-cols-2">
                        <div className='flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] '><img className='w-[34px] ' src={imgHTML} alt="" /></div>
                        <div className='flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] '><img className='w-[34px] ' src={imgCSS} alt="" /></div>
                        <div className='flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] '><img className='w-[34px] ' src={imgJavascript} alt="" /></div>
                        <div className='flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] '><img className='w-[34px] ' src={imgTypescript} alt="" /></div>
                        <div className='flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] '><img className='w-[34px] ' src={imgReactIcon} alt="" /></div>
                        <div className='flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] '><img className='w-[34px] ' src={imgPHP} alt="" /></div>
                        <div className='flex justify-center items-center rounded-[50%] w-[65px] h-[65px] bg-white shadow-md hover:scale-[1.3] transition-[100ms] '><img className='w-[34px] ' src={imgNode} alt="" /></div>
                    </div>
                </div>                 
            </div>
        </div>
    )
}