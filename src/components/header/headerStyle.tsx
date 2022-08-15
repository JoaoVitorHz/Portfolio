import styled from "styled-components";

export const HeaderCss = styled.div`
    width: 100vw;
    height: 70px;

    header{
        max-width: 1200px;
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu a{
        text-decoration: none;
        color: var(--black);
        margin: 0 15px;
        font-weight: 500;
    }
    .menu a:hover {
        color: #90caf8;
        transition: .5s;
    }
    .RedesSociasIcones a{
        font-size: 25px;
        color: var(--black);
        margin: 0 10px;
    }
    .RedesSociasIcones :hover{
        color: #90caf8;
        transition: .5s;
    }
`;