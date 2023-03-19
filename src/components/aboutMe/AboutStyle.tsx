import styled from "styled-components";

export const AboutCss = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #f9f9f9;

    /* Container */
    
    .about-container{
        max-width: 1024px;
        width: 100%;
        height: 100%;
        margin-top: 200px;
    }
    .about-content{
        display: flex;
        align-items: center;
        width: 100%;
    }

    /* Title, Desc and Links Content */

    .about-info h1{
        color: #2d2e32;
        font-size: 55px;
        line-height: 1.2;
        margin-bottom: 20px;
        margin-top: 20px;
        width: 500px;
    }
    .about-info h1 img{
        position: relative;
        width: 60px;
        vertical-align: middle;
    }
    .about-info span{
        width: 500px;
        display: block;

        color: #767676;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
    }
    .about-links{
        width: 500px;
        display: flex;
        gap: 20px;
        margin-top: 25px;
    }
    .about-links a{
        text-decoration: none;
        color: #2d2e32;
        font-size: 28px;
    }
    .about-links a:hover{
        color: #147efb;
        transition: 300ms;
    }

    /* Image Session */

    .about-image{
        display: flex;
        justify-content: center;
        width: 50%;
    }

    .about-image img{
        width: 350px;
        height: 350px;
    }

    /* Technology sesssion*/

    .about-technology{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 100px;
    }
    .about-technology span{
        border-right: 2px solid rgba(45,46,50,.5);
        color: #2d2e32;
        font-weight: 600;
        margin-right: 70px;
        padding-right: 20px;
    }
    .about-technology-itens{
        display: flex;
        gap: 25px;
    }
    .about-technology-itens div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        background-color: #FFF;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    .about-technology-itens div:hover{
        transform: scale(1.3);
        transition: 100ms;
    }
    .about-technology-itens div img{
        width: 34px;
    }
`;