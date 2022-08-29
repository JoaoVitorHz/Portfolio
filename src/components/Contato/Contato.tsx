import { ContatoCss } from "./ContatoStyle";

export function Contato() {
    return(
        <ContatoCss>
            <h1>Contato</h1>
            <div className="contato-bg">
                    <div className="formTitulo">
                        <h1>Enviar Mensagem</h1>
                        <span>Tá afim de me mandar uma mensagem por email? Escreve ai!</span>
                    </div>
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="name_of_my_form" />

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