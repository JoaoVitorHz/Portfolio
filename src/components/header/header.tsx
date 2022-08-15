import { HeaderCss } from "./headerStyle";
export function Header(){
    return(
        <HeaderCss>
            <header>
                <div className="RedesSociasIcones">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/" target="_blank" title="Linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/viitor_zy/" target="_blank" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://web.whatsapp.com/send?phone=55119981808091" target="_blank" title="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://github.com/JoaoVitorHz" target="_blank" title="GitHub"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="menu">
                    <a href="">Sobre min</a>
                    <a href="">Projetos</a>
                    <a href="">Home</a>
                    <a href="">Home</a>
                </div>
            </header>
        </HeaderCss>
    );
}