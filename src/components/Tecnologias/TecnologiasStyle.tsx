import styled from "styled-components";

export const TecnologiasCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    
    h1{
        margin: 10px 0 70px 0;
    }
    .tecnologias-bg{
        max-width: 1200px;
        width: 100%;
        height: 100%;

        display: flex;
        gap: 20px;
    }
    .tecnologiasListaItems{
        box-shadow: 0 0 1px black;
        border-radius: 5px;
        padding: 0 50px 50px 50px;
        flex: 1;
    }
    .tecnologiaTitulo{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .tecnologiaTitulo h2{
        font-weight: 500;
    }
    .tecnologiaLista{
        margin-top: 20px;
    }
    .tecnologiaLista ul{
        list-style: none;
    }
    .tecnologiaLista ul li{
        margin: 10px 0;
    }
    .tecnologiaLista ul li i{
        color: green;
        margin-right: 10px;
    }
    .bola-bg{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    .bola{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #333;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bola i{
        color: var(--white);
        font-size: 30px;
    }

    @media(max-width: 830px){
    .tecnologias-bg{
        max-width: 1200px;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;
    }
    .tecnologiaLista{
        display: flex;
        justify-content: center;
    }
    .tecnologiasListaItems{
        width: 500px;
    }
}
`;