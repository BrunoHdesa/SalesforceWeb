import React from "react";
import { HeaderElement, HeaderWrapperElement, LogoElement } from "./Header.style";
import Logo from "../../assets/salesforce-simples.png";
import { MainMenu } from "../MainMenu/MainMenu";


export function Header() {

    return (
        <>
            <HeaderElement>
                <HeaderWrapperElement>
                    <LogoElement to="/">
                        <img src={Logo} alt="Logo Salesforce em azul escuro" />
                    </LogoElement>
        
                    <MainMenu />
                </HeaderWrapperElement>
            </HeaderElement>
        </>
    );
}

export default Header