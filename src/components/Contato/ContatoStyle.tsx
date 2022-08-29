import styled from "styled-components";

export const ContatoCss = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;

    h1{
        color: var(--white);
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
        justify-content: center;
    }

    .formTitulo{ 
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .formTitulo span{
        color: var(--white);
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
    }
    form textarea{
        padding: 10px;
        border-radius: 5px;
        height: 100px;
    }
    form button{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 0 0 5px rgba(255, 255, 255, 1);
        cursor: pointer;

        &:hover{
            background-color: #aaa;
            transition: .5s;
        }
    }
    
    .inputs{
        display: flex;
        flex-direction: column;
    }
    .inputs span{
        color: #FFFFFF;
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