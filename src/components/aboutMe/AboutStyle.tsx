import styled from "styled-components";

export const AboutCss = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;

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
`;