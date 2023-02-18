// Package / Dependency Imports
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// Local Imports
import { selectCars } from "../features/car/slice";


const Header = () => {
    const cars = useSelector(selectCars);
    const [sideNavStat, setSideNavStat] = useState(false);

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
                <CustomMenuIcon onClick={() => setSideNavStat(true)}/>
            </RightMenu>

            <BurgerNav show={sideNavStat}>
                <CloseWrapper>
                    <CustomCloseIcon onClick={() => setSideNavStat(false)} />
                </CloseWrapper>
                {cars && cars.map((item, index) => (
                    <li key={`${index}`}><a key={`${item}`} href="/#">{item}</a></li>
                ))}
                <li><a href="/#">Trade-In</a></li>
                <li><a href="/#">Existing Inventory</a></li>
            </BurgerNav>
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

const BurgerNav = styled.div`
    width: 300px;
    z-index: 2;
    position: fixed;
    list-style: none;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    background-color: white;
    text-align: start;

    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
        a {
            font-weight: 600;
        }
    }
`;

const CloseWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const CustomCloseIcon = styled(CloseIcon)`
    cursor: pointer;
`;

export default Header;
