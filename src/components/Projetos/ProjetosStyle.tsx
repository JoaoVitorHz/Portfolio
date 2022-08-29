import styled from "styled-components";

export const ProjetosCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #333;
    /* background-color: #90caf8; */
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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .projetos-bg h2{
        display: inline;
        color: var(--white);
    }
    .projetos-bg span{
        color: var(--white);
    }
    .projetosItem-bg{
        width: 100%;
        display: flex; 
    }
    .projetosItem{
        width: 400px;
        margin: 10px;
        height: 200px;
        border-radius: 3px;
        aspect-ratio: 16/9;
    }
    .projetosItem img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .projetosItem a{
        text-decoration: none;
        color: var(--white);
        font-weight: 400;
        cursor: pointer;
    }
    .embreve{
        background-color: #FFF;
    }
    .projetosBackend{
        margin-top: 60px;
        margin-bottom: 50px;
    }

    @media (max-width: 1115px){
        .projetosItem{
            width: 340px;
        }
    }
    @media (max-width: 980px){
        .projetosItem{
            width: 370px;
            margin: 30px 10px;
        }
        .projetosItem-bg{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 810px) {
        .projetosItem-bg{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 430px) {
        .projetosItem{
            width: 300px;
        }
    }
    @media (max-width: 350px) {
        .projetosItem{
            width: 250px;
        }
    }
    @media (max-width: 290px) {
        .projetosItem{
            width: 200px;
            height: 140px; 
        }
        .projetos-bg{
            align-items: flex-start;
        }
    }
`;