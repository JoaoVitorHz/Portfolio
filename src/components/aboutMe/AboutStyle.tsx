import styled from "styled-components";

export const AboutCss = styled.div`
    width: 100vw;
    min-height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    .about-bg{
        max-width: 1200px;
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
        margin-bottom: 10px;
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
            width: 350px;
        }
    }
    @media(max-width: 915px){
        .aboutLeftSide span{
            font-size: 15px;
        }
    }
    @media (max-width: 735px){
        .about-bg{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        .aboutLeftSide{
            width: 75%;
        }
        .aboutLeftSide span{
            font-size: 15px;
        }
        .aboutLeftSide h1{
            font-size: 45px;
            text-align: center;
        }
        .aboutLeftSide h2{
            margin-bottom: 10px;
            text-align: center;
        }
        .aboutRightSide{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    @media (max-width: 500px){
        .aboutLeftSide h1{
            font-size: 35px;
        }
        .aboutLeftSide h2{
            font-size: 20px;
        }
    }
`;