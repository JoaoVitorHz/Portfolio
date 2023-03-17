import { TecnologiasCss } from "./TecnologiasStyle";
import 'aos/dist/aos.css';

export function Tecnologias(){

    return(
        <TecnologiasCss>
            <h1 id="TecnologiaScroll">Tecnologias</h1>
            <div className="tecnologias-bg" data-aos="fade-up">
                <div className="tecnologiasListaItems">
                    <div className="bola-bg">
                        <div className="bola">
                            <i className="fa-solid fa-code"></i>
                        </div>
                    </div>
                    <div className="tecnologiaTitulo">
                        <h3>FrontEnd</h3>
                    </div>
                    <div className="tecnologiaLista">
                        <ul>
                            <li><i className="fa-solid fa-check"></i>React.Js</li>
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
                        <h3>BackEnd</h3>
                    </div>
                    <div className="tecnologiaLista">
                        <ul>
                            <li><i className="fa-solid fa-check"></i>PHP</li>
                            <li><i className="fa-solid fa-check"></i>Node.Js</li>
                            <li><i className="fa-solid fa-check"></i>Java</li>
                            <li><i className="fa-solid fa-check"></i>MySql</li>
                            <li><i className="fa-solid fa-check"></i>MVC</li>
                            <li><i className="fa-solid fa-check"></i>POO</li>
                            <li><i className="fa-solid fa-check"></i>SOLID</li>
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
                            <li><i className="fa-solid fa-check"></i>Figma</li>
                            <li><i className="fa-solid fa-check"></i>Photoshop</li>
                            <li><i className="fa-solid fa-check"></i>Inglês Intermediario</li>
                            <li><i className="fa-solid fa-check"></i>SCRUM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </TecnologiasCss>
    );
}