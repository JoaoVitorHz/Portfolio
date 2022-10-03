import styled from "styled-components";

export const ContatoCss = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;

    ::before{
        content: '';
        display: block;
        width: 1024px;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.4);
        margin-bottom: 50px;
    }

    h1{
        color: var(--black);
        margin: 10px 0 0 0;
    }
    .formTitulo span{
        text-align: center;
    }
    .contato-bg{
        max-width: 1200px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
    }

    .formTitulo{ 
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .formTitulo span{
        color: var(--black);
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        gap: 15px 0;
        margin-top: 20px;
    }   
    .inputs{
        width: 100%;
    }
    form input{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #000;
    }
    form textarea{
        padding: 10px;
        border-radius: 5px;
        height: 100px;
        border: 1px solid #000;
    }
    form button{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(255, 255, 255, 1);
        border: 1px solid #000;
        background-color: #FFF;
        cursor: pointer;

        &:hover{
            background-color: #EEE;
            transition: .5s;
        }
    }
    
    .inputs{
        display: flex;
        flex-direction: column;
    }
    .inputs span{
        color: var(--black);
    }
   
    @media(max-width: 830px){
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 70%;
            gap: 15px 0;
            margin-top: 20px;
        } 
    }
    @media(max-width: 564px){
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            gap: 15px 0;
            margin-top: 20px;
        } 
    }
    @media(max-width: 340px){
        .formTitulo{ 
            width: 85%;
        }
        .formTitulo h1{
            font-size: 25px;
        }
    }
    @media(max-width: 270px){
        .formTitulo h1{
            font-size: 22px;
        }
    }
`;