import styled from "styled-components";

export const ProjetosCss = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

::before{
    content: '';
    display: block;
    width: 1024px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.4);
    margin-bottom: 50px;
}
h1{
    color: var(--black);
    font-size: 38px;
}
span{
    color: #888;
    font-weight: 500;
}
.tituloCarousel{
    width: 900px;
}
.tituloCarousel h2{
    font-size: 25px;
}

@media (max-width: 1030px){
    .tituloCarousel{
        width: 700px;
    }
}
@media (max-width: 800px){
    .tituloCarousel{
        width: 600px;
    }
}
@media (max-width: 700px){
    .tituloCarousel{
        width: 100px;
        margin-top: 50px;
    }

}
`;