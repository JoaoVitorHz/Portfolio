import { WorkStyle } from "./WorkStyle"; 

import experience from '../../assets/experienceText.js'

export function Work(){
    return(
        <WorkStyle>
            <div className="work-container" id="AboutMeScroll">
                <div className="title-desc">
                    <span>Experiência Profissional</span>
                    <h3>4 Anos de Experiência Profissional 🐱‍💻</h3>
                </div>

                <div className="work-content">
                    {experience.map((work) => {
                        return(
                            <div className="work-item">
                                <div className="work-item-img">
                                    <img src={work.logo} alt="" />
                                </div>
                                <div className="work-item-desc">
                                    <h4>{work.company}</h4>
                                    <span>{work.position}</span>
                                    <ul>
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
        </WorkStyle>
    )
}