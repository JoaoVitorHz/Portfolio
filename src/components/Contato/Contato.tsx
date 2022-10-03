import { ContatoCss } from "./ContatoStyle";

export function Contato() {
    return(
        <ContatoCss>
            <h1 id="ContatoScroll">Contato</h1>
            <div className="contato-bg">
                    <div className="formTitulo">
                        <h1>Enviar Mensagem</h1>
                        <span>Tá afim de me mandar uma mensagem por email? Escreve ai!</span>
                    </div>
                    <form action="https://formsubmit.co/vitorjoao39207@gmail.com" method="POST">
                        <input type="hidden" name="_next" value="https://statuesque-crepe-cd6310.netlify.app" />
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
        </ContatoCss>
    )
}