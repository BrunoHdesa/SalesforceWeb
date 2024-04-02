import { Box, FooterContainer, Row, Column, FooterLink, Heading, Logo } from "./Footer.style";

const Footer = () => {
    return (
        <Box>
            <Logo>
                <img src="src\assets\salesforce-simples.png" alt="" />
            </Logo>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Sobre nós</Heading>
                        <FooterLink href="/">
                            O que é a Salesforce?
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contato</Heading>
                        <FooterLink href="/contato">
                            Fale conosco
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
