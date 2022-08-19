import styled from "styled-components";

export const ContatoCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #90caf8;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    h1{
        color: var(--white);
        margin: 10px 0 0 0;
    }
    .contato-bg{
        max-width: 1200px;
        width: 100%;
        height: 100%;
        display: flex;
    }
    .contatoLadoEsquerdo{
        width: 50%;
        height: 100%;
        display: flex;
    }
    .contatoRedeSocais{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .contatoRedeSocaisItem{
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        box-shadow: 0 0 5px rgba(255, 255, 255, 1);
        padding: 10px;
        border-radius: 5px;
    }
    .contatoRedeSocaisItem a, span{
        color: var(--white);
    }
    .contatoRedeSocaisItem span{
        font-size: 16px;
    }
    .contatoRedeSocaisItem a{
        text-decoration: none;
        font-weight: 500;
        font-size: 18px;
        transition: .5s;
    }
    .contatoRedeSocaisItem a:hover{
        color: #575454;
    }
    .contatoRedeSocaisItem a i{
        margin: 0 5px;
        font-size: 25px;
    }
    .contatoRedeSocais{
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        margin-left: 50px;
    }
    .fa-solid{
        font-size: 16px !important;
    }

    .contatoLadoDireito{
        width: 50%;
        height: auto; 
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
    .contatoLadoDireito form{
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 15px 0;
        margin-top: 20px;
    }   
    .contatoLadoDireito form input{
        padding: 10px;
        border-radius: 5px;
    }
    .contatoLadoDireito form textarea{
        padding: 10px;
        border-radius: 5px;
        height: 100px;
    }
    .contatoLadoDireito form button{
        padding: 10px;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 0 0 5px rgba(255, 255, 255, 1);
        cursor: pointer;
    }
    .contatoLadoDireito form button:hover{
       background-color: #a6adf1;
       transition: .5s;
    }
    .inputs{
        display: flex;
        flex-direction: column;
    }
    .inputs span{
        color: #FFFFFF;
    }
    .formTitulo span{
        color: var(--white);
    }
    .formTitulo{ 
        width: 90%;
    }
    @media(max-width: 830px){
        .contato-bg{
            max-width: 1200px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .contatoLadoEsquerdo{
            order: 2;
        }
        .contatoLadoDireito{
            order: 1;
        }
        .contatoLadoDireito{
            width: 90%;
        }
        .contatoLadoEsquerdo{
            width: 90%;
            height: 100%;
            display: flex;
            justify-content: center;
        }   
    }
`;