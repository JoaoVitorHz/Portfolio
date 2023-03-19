import styled from "styled-components";

export const AboutTesteCss = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;

    /* Container */
    
    .about-container{
        max-width: 1024px;
        width: 100%;
        height: 100%;
        display: flex;
        gap: 50px;
    }

    .about-image,
    .about-info{
        width: 50%;
        height: 100%;
    }
    .about-image{
        display: flex;
        align-items: center;
    }
    .about-image img{
        width: 450px;
        height: 400px;
        border-radius: 10px;
    }


    .about-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .about-info span{
        text-transform: uppercase;
        font-weight: 600;
        color: #147efb;
        font-size: 17px;
        margin-bottom:  10px;
    }
    .about-info h3{
        color: #2d2e32;
        font-size: 25px;
        line-height: 1.4;
        margin-bottom: 20px;
    }
    .about-info p{
        color: #767676;
        font-size: 17px;
        font-weight: 400;
        line-height: 1.5;
        margin: 10px;
    }
    .about-info p a{
        color: #147efb;
    }


    @media (max-width: 1368px){
        .about-container{
            gap: 50px;
        }

        .about-image{
            justify-content: flex-end;
        }

        .about-image img{
            width: 400px;
            height: 350px;
        }

        .about-info span{
            font-size: 16px;
            margin-bottom: 0px;
        }

        .about-info h3{
            font-size: 22px;
            margin-bottom: 5px;
        }

        .about-info p{
            font-size: 15px;
            margin: 5px;
        }
    }
`;