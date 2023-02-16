// Package / Dependency Imports
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";


const Header = () => {
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="LNV" />
            </a>
            <Menu>
                <a href="/#">Model S</a>
                <a href="/#">Model 3</a>
                <a href="/#">Model X</a>
                <a href="/#">Model Y</a>
            </Menu>

            <RightMenu>
                <a href="/#">Shop</a>
                <a href="/#">Tesla Account</a>
                <CustomMenuIcon />
            </RightMenu>
        </Container>
    )
};


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`;

const Menu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        flex-wrap: nowrap;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
`;

const CustomMenuIcon = styled(MenuIcon)`
    cursor: pointer;
`;


export default Header;
