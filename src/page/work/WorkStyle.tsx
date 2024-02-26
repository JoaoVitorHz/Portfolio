import styled from "styled-components";

export const WorkStyle = styled.div`
    width: 100vw;
    min-height: 70vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;


    .work-container{
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    .title-desc span{
        text-transform: uppercase;
        font-weight: 600;
        color: #147efb;
        font-size: 17px;
        margin-bottom:  10px;
    }
    .title-desc h3{
        color: #2d2e32;
        font-size: 25px;
        line-height: 1.4;
        margin-bottom: 50px;
    }

    .work-content{
        width: 100%;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    .work-item-img{
        width: 400px;
        height: 300px;
        margin-bottom: 10px;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #eee;
    }
    
    .work-item-desc span{
        font-size: 14px;
        color: #888;
    }
    .work-item-skills{
        display: block;
        color: #000 !important;
        width: 350px;
    }
    .work-item-desc ul{
        width: 350px;
        margin-left: 20px;
        margin-top: 10px;
        font-size: 14px;
        color: #000;
        font-weight: 500;
    }

 
  

    @media (max-width: 1024px){
        .work-content{
            grid-template-columns: repeat(1, 1fr);
        }
    }

   
`;