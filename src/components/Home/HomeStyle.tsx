import styled from "styled-components";

export const HomeCss = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #f9f9f9;

    /* Container */
    .home-container{
        max-width: 1024px;
        width: 100%;
        height: 100%;
        margin-top: 200px;
    }
    .home-content{
        display: flex;
        align-items: center;
        width: 100%;
    }

    /* Title, Desc and Links Content */
    .home-info h1{
        color: #2d2e32;
        font-size: 55px;
        line-height: 1.2;
        margin-bottom: 20px;
        margin-top: 20px;
        width: 500px;
    }
    .home-info h1 img{
        position: relative;
        width: 60px;
        vertical-align: middle;
    }
    .home-info span{
        width: 500px;
        display: block;

        color: #767676;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
    }
    .home-links{
        width: 500px;
        display: flex;
        gap: 20px;
        margin-top: 25px;
    }
    .home-links a{
        text-decoration: none;
        color: #2d2e32;
        font-size: 28px;
    }
    .home-links a:hover{
        color: #147efb;
        transition: 300ms;
    }

    /* Image Session */
    .home-image{
        display: flex;
        justify-content: center;
        width: 50%;
    }

    .home-image img{
        width: 350px;
        height: 350px;
    }

    /* Technology sesssion*/
    .home-technology{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 100px;
    }
    .home-technology span{
        border-right: 2px solid rgba(45,46,50,.5);
        color: #2d2e32;
        font-weight: 600;
        margin-right: 70px;
        padding-right: 20px;
    }
    .home-technology-itens{
        display: flex;
        gap: 25px;
    }
    .home-technology-itens div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        background-color: #FFF;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .home-technology-itens div:hover{
        transform: scale(1.3);
        transition: 100ms;
    }
    .home-technology-itens div img{
        width: 34px;
    }

    @media (max-width: 1368px){
        .home-container{
            margin-top: 100px;
        }

        .home-technology{
            margin-top: 50px;
        }
    }

    @media (max-width: 1280px) and (max-height: 720px){
        .home-technology{
            margin-bottom: 50px;
        }
    }
    @media (max-width: 1280px) and (max-height: 600px){
        height: 130vh;

        .home-info h1{
            font-size: 40px;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 800px) and (max-height: 600px){
        .home-container{
            max-width: none;
        }
        .home-content{
            display: flex;
        }

        .home-info{
            width: 40%;
        }
        .home-info h1{
            font-size: 30px;
            width: 320px;
        }
        .home-info h1 img{
            width: 40px;
        }
        .home-info span{
            width: 350px;
            font-size: 18px;
        }
        .home-image img{
            width: 250px;
            height: 250px;
        }

        .home-technology-itens{
            gap: 15px;
        }
        .home-technology-itens div{
            width: 45px;
            height: 45px;
        }
        .home-technology-itens div img{
            width: 25px;
        }
    }

        /* Resposividade mobile */

    @media (max-width: 768px){
        min-height: 100vh;
        height: auto;

        /* Titulo e imagem */
        .home-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        .home-info {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .home-links{
            width: 270px;
        }

        .home-info h1{
            font-size: 30px;
            line-height: 1.2;
            margin-bottom: 20px;
            margin-top: 20px;
            width: 300px;
        }
        .home-info span{
            width: 300px;
        }

        /* Tecnologias */
        .home-technology-itens{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .home-technology{
            flex-direction: column;
        }
        .home-technology span{
            border-right: 0;
            margin-right: 0px;
            padding-right: 0px;
            margin: 30px 0 30px 0;
        }
    }
`;