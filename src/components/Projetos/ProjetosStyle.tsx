import styled from "styled-components";

export const ProjetosCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #90caf8;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    h1{
        color: var(--white);
        margin: 10px 0;
    }
    .projetos-bg{
        max-width: 1200px;
        width: 100%;
        height: 100%;
    }
    .projetosFrontend{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .projetosFrontend h2{
        color: var(--white);
    }
    .frontendItems{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .frontendItem{
        display: flex;
        flex-direction: column;
    }
    .frontendItem a{
        text-decoration: none;
        color: var(--white);
    }
    .frontendItem a i{
        margin-left: 10px;
    }
    .frontendItem span{
        color: var(--white);
        font-size: 14px;
    }
    .ProjetosImg{
        width: 90%;
        height: 70%;
    }
    .ProjetosImg img{
        width: 100%;
        height: 100%;
    }

    @media(max-width: 760px) {
        .projetosFrontend h2{
            color: var(--white);
            margin-bottom: 15px;
        }   
        .frontendItems{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px;
        }
    }
`;