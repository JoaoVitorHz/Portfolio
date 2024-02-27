import { HeaderCss, Dropdown } from "./headerStyle";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function Header(){
    return(
        <div className="w-screen h-[90px] px-[15px] fixed z-10 bg-white shadow-md">
            <header className="w-[90%] h-full m-auto flex justify-between items-center">
                <div className="logo">
                   <span className="text-[23px] font-bold text-[#2d2e32]">João Vitor</span>
                </div>
                <div className="menu screen-735:hidden">
                    <a className="text-black mx-[15px] font-semibold text-[17px] hover:text-[#6456c8] hover:transition-all" href="#">Home</a>
                    <a className="text-black mx-[15px] font-semibold text-[17px] hover:text-[#6456c8] hover:transition-all" href="#AboutMeScroll">Sobre mim</a>
                    <a className="text-black mx-[15px] font-semibold text-[17px] hover:text-[#6456c8] hover:transition-all" href="#ProjetosScroll">Projetos</a>
                    <a className="text-black mx-[15px] font-semibold text-[17px] hover:text-[#6456c8] hover:transition-all" href="#TecnologiaScroll">Tecnologias</a>
                    <a className="text-black mx-[15px] font-semibold text-[17px] hover:text-[#6456c8] hover:transition-all" href="#ContatoScroll">Contato</a>
                </div>
                <Dropdown className="hidden mr-[30px] screen-735:block">
                    <DropdownMenu.Root >
                        <DropdownMenu.DropdownMenuTrigger className="bg-transparent">
                            <button className="w-[50px] h-[50px] rounded-[50%] bg-[#333] cursor-pointer text-white text-[18px]"><i className="fa-solid fa-bars"></i></button>
                        </DropdownMenu.DropdownMenuTrigger> 
                        <DropdownMenu.Content>
                            <DropdownMenu.Group className="flex flex-col bg-[#333]">
                                <a className="text-white py-[10px] px-[20px] hover:bg-[#4b4a4a]" href="#">Home</a>
                                <a className="text-white py-[10px] px-[20px] hover:bg-[#4b4a4a]" href="#AboutMeScroll">Sobre mim</a>
                                <a className="text-white py-[10px] px-[20px] hover:bg-[#4b4a4a]" href="#ProjetosScroll">Projetos</a>
                                <a className="text-white py-[10px] px-[20px] hover:bg-[#4b4a4a]" href="#TecnologiaScroll">Tecnologias</a>
                                <a className="text-white py-[10px] px-[20px] hover:bg-[#4b4a4a]" href="#ContatoScroll">Contato</a>
                            </DropdownMenu.Group>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Dropdown>
            </header>
        </div>
    );
}