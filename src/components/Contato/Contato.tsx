import { ContatoCss } from "./ContatoStyle";

export function Contato() {
    return(
        <ContatoCss>
            <h1>Contato</h1>
            <div className="contato-bg">
                <div className="contatoLadoEsquerdo">
                    <div className="contatoRedeSocais">
                        <div className="contatoRedeSocaisItem">
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/" target="_blank" title="Linkedin"><i className="fa-brands fa-linkedin-in"></i>Linkedin<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Quer ver meu perfil profissional? Vai lá no Linkedin!</span>
                        </div>
                        <div className="contatoRedeSocaisItem">
                            <a href="https://www.instagram.com/viitor_zy/" target="_blank" title="Instagram"><i className="fa-brands fa-instagram"></i>Instragram<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Tá afim de ver algumas fotinhas minhas? Me segue no Instagram!</span>
                        </div>
                        <div className="contatoRedeSocaisItem">
                            <a href="https://web.whatsapp.com/send?phone=55119981808091" target="_blank" title="WhatsApp"><i className="fa-brands fa-whatsapp"></i>WhatsApp<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Quer me mandar um Whats? Me manda mensagem no WhatsApp!</span>
                        </div>
                        <div className="contatoRedeSocaisItem">
                            <a href="https://github.com/JoaoVitorHz" target="_blank" title="GitHub"><i className="fa-brands fa-github"></i>GitHub<i className="fa-solid fa-arrow-right"></i></a>
                            <span>Quer ver mais projetos meus? Da uma olhada no meu GitHub!</span>
                        </div>
                    </div>
                </div>
                <div className="contatoLadoDireito">
                    <div className="formTitulo">
                        <h1>Enviar Mensagem</h1>
                        <span>Tá afim de me mandar uma mensagem por email? Escreve ai!</span>
                    </div>
                    <form action="">
                        <div className="inputs">
                            <span>Nome</span>
                            <input type="text" name="nome" placeholder="Insira aqui o seu Nome..." />
                        </div>
                        <div className="inputs">
                            <span>Email</span>                     
                            <input type="email" name="email" placeholder="Insira aqui o seu email..." />    
                        </div>
                        <div className="inputs">
                            <span>Mensagem</span>
                            <textarea name="Mensagem" placeholder="Insira aqui sua Mensagem..."></textarea>     
                         </div>
                        
                        <button type="submit">Enviar Mensagem</button>              
                    </form>
                </div>
            </div>
        </ContatoCss>
    )
}