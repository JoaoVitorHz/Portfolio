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
        margin: 10px;
        height: 200px;
        flex: 1;
        border-radius: 3px;
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
`;