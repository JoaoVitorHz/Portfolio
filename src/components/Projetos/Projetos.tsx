import { ProjetosCss } from "./ProjetosStyle"
import { Carousel }  from "./Carousel/Carousel"
import { CarouselBackend } from "./CarouselBackend/CarouselBackend"
import Shortly from "../../assets/projetos/ShortlyThumb.jpg"

export function Projetos(){

    const data = [
        {img: Shortly, nome: "Shortly", descricao: "Qualquer coisa", link: "link"}
    ]

    return(
        <ProjetosCss id="ProjetosScroll">
            <h1>Projetos</h1>
            <span>Projetos mais recentes</span>
            <div className="tituloCarousel">
                <h2>Frontend</h2>
            </div>
           <Carousel/>
           <div className="tituloCarousel">
                <h2>Backend</h2>
            </div>
            <CarouselBackend />
        </ProjetosCss>
    )
}