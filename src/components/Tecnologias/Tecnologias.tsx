import { TecnologiasCss } from "./TecnologiasStyle";
import 'aos/dist/aos.css';

export function Tecnologias(){
    return(
        <TecnologiasCss>
            <div className="header-tecnologias">
                <span>Conhecimentos / Tecnologias</span>
                <h1 id="TecnologiaScroll">Todas as Tecnologias que domino 🧐</h1>
            </div>
            <div className="tecnologias-bg" data-aos="fade-up">
                <div className="tecnologiasListaItems">
                    <div className="bola-bg">
                        <div className="bola">
                            <i className="fa-solid fa-code"></i>
                        </div>
                    </div>
                    <div className="tecnologiaTitulo">
                        <h3>Front-End</h3>
                    </div>
                    <div className="tecnologiaLista">
                        <ul>
                            <li><i className="fa-solid fa-check"></i>React</li>
                            <li><i className="fa-solid fa-check"></i>NEXT.Js</li>
                            <li><i className="fa-solid fa-check"></i>Vue</li>
                            <li><i className="fa-solid fa-check"></i>Typescript</li>
                            <li><i className="fa-solid fa-check"></i>Radix Ui</li>
                            <li><i className="fa-solid fa-check"></i>JavaScript</li>
                            <li><i className="fa-solid fa-check"></i>HTML</li>
                            <li><i className="fa-solid fa-check"></i>CSS</li>
                            <li><i className="fa-solid fa-check"></i>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="tecnologiasListaItems">
                <div className="bola-bg">
                        <div className="bola">
                            <i className="fa-solid fa-server"></i>
                        </div>
                    </div>
                    <div className="tecnologiaTitulo">
                        <h3>Back-End</h3>
                    </div>
                    <div className="tecnologiaLista">
                        <ul>
                            <li><i className="fa-solid fa-check"></i>PHP</li>
                            <li><i className="fa-solid fa-check"></i>Laravel</li>
                            <li><i className="fa-solid fa-check"></i>Node.Js</li>
                            <li><i className="fa-solid fa-check"></i>Java</li>
                            <li><i className="fa-solid fa-check"></i>MySql</li>
                        </ul>
                    </div>
                </div>
                <div className="tecnologiasListaItems">
                <div className="bola-bg">
                        <div className="bola">
                        <i className="fa-solid fa-receipt"></i>
                        </div>
                    </div>
                    <div className="tecnologiaTitulo">
                        <h3>Outros</h3>
                    </div>
                    <div className="tecnologiaLista">
                        <ul>
                            <li><i className="fa-solid fa-check"></i>React Native</li>
                            <li><i className="fa-solid fa-check"></i>Api's Rest</li>
                            <li><i className="fa-solid fa-check"></i>Git / GitHub</li>
                            <li><i className="fa-solid fa-check"></i>Figma</li>
                            <li><i className="fa-solid fa-check"></i>Photoshop</li>
                            <li><i className="fa-solid fa-check"></i>Inglês Intermediario</li>
                        </ul>
                    </div>
                </div>
            </div>
        </TecnologiasCss>
    );
}