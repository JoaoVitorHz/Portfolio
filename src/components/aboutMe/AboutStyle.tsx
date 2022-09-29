import styled from "styled-components";

export const AboutCss = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    .about-bg{
        max-width: 1024px;
        width: 100%;
        height: 100%;
        display: flex;
    }
    .aboutLeftSide{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .aboutLeftSide h1{
        font-size: 55px;
        line-height: 70px;
    }
    .aboutLeftSide h2{
        color: #666;
        font-weight: 500;
        margin-bottom: 10px;
        font-size: 22px;
    }
    .aboutLeftSide span{
        width: 450px;
    }
    .aboutLeftSide a{
        display: inline-block;
        padding: 10px 20px;
        background-color: #333;
        color: white;
        border-radius: 5px;
        margin-top: 20px;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
        text-decoration: none;
    }

    /* About Left Side Styles End */

    /* About Right Side Styles */

    .aboutRightSide{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .aboutRightSide img{
        width: 500px;
    }
    @media(max-width: 1060px){
        .aboutRightSide img{
            width: 450px;
        }
    }
    @media(max-width: 935px){
        .aboutRightSide img{
            width: 320px;
        }
    }
    @media(max-width: 915px){
        .aboutLeftSide span{
            font-size: 15px;
            width: auto;
        }
    }
    @media (max-width: 735px){
        .about-bg{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .aboutLeftSide{
            height: 50%;
            width: 75%;
        }
        .aboutLeftSide span{
            font-size: 15px;
            text-align: center;
        }
        .aboutLeftSide h1{
            font-size: 45px;
            text-align: center;
        }
        .aboutLeftSide h2{
            margin-bottom: 10px;
            text-align: center;
        }
        .baixarCurriculo{
            display: flex;
            justify-content: center;
        }
        .aboutRightSide{
            width: 50%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    @media (max-width: 420px){
        .aboutLeftSide h1{
            font-size: 36px;
            line-height: 50px;
        }
        .aboutLeftSide h2{
            font-size: 18px;
        }
    }
    @media (max-width: 325px){
        .aboutLeftSide h2{
            font-size: 16px;
        }
    }
`;