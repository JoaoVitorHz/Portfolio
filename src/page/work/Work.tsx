import { WorkStyle } from "./WorkStyle"; 

import experience from '../../assets/experienceText.js'
import PageTitle from "../../components/PageTitle";

export function Work(){
    return(
        <div className="w-screen min-h-[70vh] p-[100px] flex justify-center items-center bg-white">
            <div className="w-[80%] flex flex-col" id="AboutMeScroll">

                <PageTitle 
                    title="Experiência Profissional" 
                    subTitle="4 Anos de Experiência Profissional 🐱‍💻" 
                />

                <div className="w-full gap-5 grid grid-cols-2 justify-items-center screen-1024:grid-cols-1">
                    {experience.map((work) => {
                        return(
                            <div className="work-item">
                                <div className="w-[400px] h-[300px] mb-[10px] rounded-md flex justify-center items-center bg-[#eee]">
                                    <img src={work.logo} alt="" />
                                </div>
                                <div className="work-item-desc">
                                    <h4 className="font-semibold">{work.company}</h4>
                                    <span className="text-sm text-[#888]">{work.position}</span>
                                    <ul className="w-[350px] ml-5 mt-[10px] text-black text-sm font-medium list-disc">
                                    {work.task.map((item) => {
                                        return(
                                            <li>{item}</li>
                                        )
                                    })}
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