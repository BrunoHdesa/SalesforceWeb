import { useState } from "react";
import { Link } from "react-router-dom";
import { MainMenuListElement, MainMenuListItemElement, MobileMenu, MobileMenuActive } from "./MainMenu.style";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MenuIcon } from "../Header/Header.style";



export const MainMenu = () => {
    const [click, setClick] = useState(false);
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setIsMenuToggled(!isMenuToggled);
    }

    const isAboveMediumScreens = useMediaQuery("(min-width: 767px)");
    const closeMobileMenu = () => setIsMenuToggled(true);


    const menuItems = [
        { id: 0, label: "Produtos", link: "/Produtos" },
        { id: 1, label: "Indústrias", link: "/Industrias" },
        { id: 2, label: "Aprendizado", link: "/Aprendizado" },
        { id: 3, label: "Suporte", link: "/Suporte" },
        { id: 4, label: "Empresa", link: "/Empresa" },
    ];

    return (
        <nav>
                <MainMenuListElement onClick={handleClick}>
                    {menuItems.map((item) => (
                    <MainMenuListItemElement key={item.id}>
                        <Link to={item.link}>{item.label}</Link>
                    </MainMenuListItemElement>
                ))}
                </MainMenuListElement>

            <MenuIcon onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faXmark : faBars} />
            </MenuIcon>

            {!isAboveMediumScreens && isMenuToggled ? (
                    <MobileMenuActive>
                        {menuItems.map((item) => (
                            <MainMenuListItemElement key={item.id}> 
                                <Link to={item.link}>{item.label}</Link>
                            </MainMenuListItemElement>
                        ))}
                    </MobileMenuActive>
            ) : (<MobileMenu>
                {menuItems.map((item) => (
                    <MainMenuListItemElement key={item.id} onClick={closeMobileMenu}>
                        <Link to={item.link}>{item.label}</Link>
                    </MainMenuListItemElement>
                ))}
            </MobileMenu>)}

        </nav>


    );
};
