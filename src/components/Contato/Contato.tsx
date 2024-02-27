import PageTitle from "../PageTitle";
import { ContatoCss } from "./ContatoStyle";

export function Contato() {
    return(
        <ContatoCss>
            <div id="ContatoScroll" className="contato-bg" data-aos="fade-down">

                <PageTitle title="Contato" subTitle="Não seja tímido! Entre em contado comigo! 👇" />

                <div className="contato-content">
                    <div className="contato-intem">
                        <div className="contato-container-icon">
                            <i className="fa-solid fa-square-phone"></i>
                        </div>
                        <div className="contato-container-texto">
                            <h6>Número</h6>
                            <span className="contato-subtitulo">+55 (11) 99818-8091</span>
                        </div>
                    </div>

                    <div className="contato-intem">
                        <div className="contato-container-icon">
                            <i className="fa-solid fa-envelope-open-text"></i>
                        </div>
                        <div className="contato-container-texto">
                            <h6>Email</h6>
                            <span className="contato-subtitulo">vitorjoao39207@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </ContatoCss>
    )
}