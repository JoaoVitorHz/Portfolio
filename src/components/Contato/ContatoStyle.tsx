import styled from "styled-components";

export const ContatoCss = styled.div`
    width: 100vw;
    height: 30vh;
    display: flex;
    justify-content: center;

    .contato-bg{
        max-width: 1200px;
        width: 100%;
        height: 100%;
    }

    .contato-bg span{
        color: #147efb;
        font-size: 17px;
        font-weight: 700;
        text-transform: uppercase;
    }
    .contato-bg h3{
        color: #2d2e32;
        font-size: 25px;
        margin-bottom: 50px;
    }

    .contato-content{
        display: flex;
        gap: 50px;
    }


    .contato-intem{
        display: flex;
        gap: 15px;
    }
    .contato-container-icon{
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: #FFF;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contato-container-icon i{
        font-size: 30px;
        color: #147efb;
    }

    .contato-container-texto h6{
        color: #2d2e32;
        font-size: 17px;
    }
    .contato-container-texto span{
        color: #767676;
        font-size: 17px;
        font-weight: 400;
        text-transform: none;
    }
`;