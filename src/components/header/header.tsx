import { HeaderCss, Dropdown } from "./headerStyle";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function Header(){
    return(
        <HeaderCss>
            <header>
                <div className="logo">
                   <span>João Vitor</span>
                </div>
                <div className="menu">
                    <a href="#">Home</a>
                    <a href="#AboutMeScroll">Sobre mim</a>
                    <a href="#ProjetosScroll">Projetos</a>
                    <a href="#TecnologiaScroll">Tecnologias</a>
                    <a href="#ContatoScroll">Contato</a>
                </div>
                <Dropdown>
                    <DropdownMenu.Root >
                        <DropdownMenu.DropdownMenuTrigger className="trigger">
                            <button><i className="fa-solid fa-bars"></i></button>
                        </DropdownMenu.DropdownMenuTrigger> 
                        <DropdownMenu.Content>
                            <DropdownMenu.Group className="group">
                                <a href="#">Home</a>
                                <a href="#AboutMeScroll">Sobre mim</a>
                                <a href="#ProjetosScroll">Projetos</a>
                                <a href="#TecnologiaScroll">Tecnologias</a>
                                <a href="#ContatoScroll">Contato</a>
                            </DropdownMenu.Group>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Dropdown>
            </header>
        </HeaderCss>
    );
}