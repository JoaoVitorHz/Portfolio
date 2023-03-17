import styled from "styled-components";

export const TesteCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    ::before{
    content: '';
    display: block;
    width: 1024px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.4);
    margin-bottom: 50px;
    }

    .teste-bg{
        max-width: 1024px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 100px;
        margin-top: 50px;
    }

    .projeto-container{
        width: 100%;
        display: flex;
        gap: 50px;
        justify-content: space-between;
    }

    .projeto-item-esquerda,
    .projeto-item-direita{
        width: 50%;
    }

    .projeto-item-esquerda{
        display: flex;
        justify-content: center;
    }

    .projeto-item-image{
        width: 100%;
    }
    .projeto-item-image img{
        width: 100%;
        border-radius: 10px;
    }
    .projeto-item-image:hover {
        transform: scale(1.06);
        transition: 300ms;
    }


    .projeto-info{
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    .projeto-item-texto{
        text-align: center;
    }
    .projeto-item-texto ul{
        width: 100%;
    }
    
`;