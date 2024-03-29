import styled from "styled-components";

export const ProjectCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #f9f9f9;

    .teste-bg{
        max-width: 1024px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 150px 0;
    }
    .header-projects{
        display: flex;
        flex-direction: column;
    }
    .header-projects span{
        color: #147efb;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 17px;
        margin-bottom: 10px;
    }
    .header-projects h3{
        color: #2d2e32;
        font-size: 25px;
        margin-bottom: 60px;
    }

    .project-container{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .projeto-content{
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FFF;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .invertPosition{
        flex-direction: row-reverse;
    }

    .projeto-item-image{
        display: flex;
        align-items: center;
    }
    .projeto-item-image img{
        width: 530px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
    .projeto-item-image:hover {
        transform: scale(1.02);
        transition: 300ms;
    }

    .projeto-info{
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    .projeto-item-texto{
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    .project-info-title{
        margin-bottom: 20px;
    }
    .project-info-title span{
        text-transform: uppercase;
        font-weight: 700;
        font-size: 17px;
    }
    .project-info-desc{
        text-align: center;
        width: 80%;
    }
    .project-info-desc span{
        color: #767676;
        font-size: 17px;
        font-weight: 500;
        text-align: center;
    }

    .project-info-links{
        margin-top: 30px;
        display: flex;
        gap: 50px;
        align-items: center;
    }
    .project-info-links a{
        text-decoration: none;
        color: #2d2e32;
        font-weight: 500;
        font-size: 17px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .project-info-links :first-child:hover {
        color: #147efb;
        transition: 300ms;
    }
    .project-info-links :last-child:hover {
        color: #147efb;
        transition: 300ms;
    }

    .project-info-links .fa-github{
        font-size: 28px;
    }
    .fa-up-right-from-square{
        font-size: 20px !important;
    }
    
    @media (max-width: 800px) and (max-height: 600px){
        .project-container{
            align-items: center;
            gap: 30px;
        }

        .projeto-content{
            width: 95%;
            height: 350px;
            padding: 20px;
        }

        .projeto-item-image img{
            width: 370px;
        }

        .project-info-title span{
            font-size: 17px;
        }
        .project-info-desc{
            text-align: center;
            width: 80%;
        }
        .project-info-desc span{
            font-size: 14px;
            font-weight: 400;
        }

        .project-info-links a{
            font-size: 14px;
            gap: 10px;
        }
    }

     @media (max-width: 768px){
        .projeto-content{
            height: auto;
            flex-direction: column;
            gap: 20px;
        }

        .header-projects{
            align-items: center;
        }
        .header-projects span{
            font-size: 17px;
        }
        .header-projects h3{
            font-size: 24px;
            margin-bottom: 40px;
            width: 300px;
        }

        .projeto-item-image img{
            width: 100%;
        }
        .teste-bg{
            margin: 100px 0;
        }
    }
`;