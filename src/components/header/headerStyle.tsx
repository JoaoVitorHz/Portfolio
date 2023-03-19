import styled from "styled-components";

export const HeaderCss = styled.div`
    width: 100vw;
    height: 90px;
    padding: 0 15px;
    position: fixed;
    z-index: 10;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   
    header{
        width: 90%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo span{
        font-size: 23px;
        font-weight: 700;
        color: #2d2e32;
    }
    .menu a{
        text-decoration: none;
        color: var(--black);
        margin: 0 15px;
        font-weight: 600;
        font-size: 17px;
    }
    .menu a:hover {
        color: var(--mainColor);
        transition: .5s;
    }
    .RedesSociasIcones a{
        font-size: 25px;
        color: var(--black);
        margin: 0 10px;
    }
    .RedesSociasIcones :hover{
        color: var(--mainColor);
        transition: .5s;
    }
    @media (max-width: 735px){
        .menu{
            display: none;
        }
    }
    @media (max-width: 300px){
        .RedesSociasIcones a{
            font-size: 20px;
            color: var(--black);
            margin: 0 5px;
        }
    }
`;

export const Dropdown = styled.div`
    display: none;
    margin-right: 30px;

@media(max-width: 735px){
    display: block;
}
.trigger{
    background-color: transparent;
}
.trigger button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #333;
    cursor: pointer;
    color: white;
    font-size: 18px;
}
.group{
    display: flex;
    flex-direction: column;
    background-color: #333;
}
.group a{
    text-decoration: none;
    color: white;
    padding: 10px 20px 10px 10px;

    &:hover{
        background-color: #4b4a4a;
    }
}
`;