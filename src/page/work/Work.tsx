import { WorkStyle } from "./WorkStyle"; 

import Experiences from '../../assets/experienceText.js'
import PageTitle from "../../components/PageTitle";
import ClinicPlus from "../../assets/LogoRed.svg"

export function Work(){
    return(
        <div className="w-screen h-auto p-5 flex justify-center items-center bg-white">
            <div className="w-[80%] h-auto flex items-center  flex-col" id="AboutMeScroll">
                <PageTitle 
                    title="Experiência Profissional" 
                    subTitle="4 Anos de Experiência Profissional 🐱‍💻" 
                />

                <div className="w-[950px] grid grid-cols-2 justify-items-center gap-7 screen-1024:grid-cols-1">
                    {Experiences.map((experience) => {
                        return(
                            <div className="">
                                <div className="w-[448px] h-[336px] bg-[#f1f1f1] flex justify-center items-center">
                                    <img className="" src={experience.logo} alt="" />
                                </div>

                                <div className="flex gap-2 flex-col mt-5 w-[448px]">
                                    <h1 className="text-xl font-semibold">{experience.company}</h1>
                                    <span className="text-sm text-gray-400">{experience.position}</span>
                                    <ul className="list-disc ml-5 font-thin">
                                        {experience.task.map((item) => <li>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                    

                </div>


               
            </div>
        </div>
    )
}