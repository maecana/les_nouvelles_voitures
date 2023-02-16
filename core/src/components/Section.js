// Package / Dependency Imports
import styled from 'styled-components';


const Section = () => {
    return (
        <Wrap>
            <HeaderContent>
                <h1>Model S</h1>
                <p>Order online for touchless delivery</p>
            </HeaderContent>

            <CallToAction>
                <ButtonGroup>
                    <OrderButton>Custom Order</OrderButton>
                    <InventoryButton>Existing Inventory</InventoryButton>
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" />
            </CallToAction>
        </Wrap>
    )
};


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: norepeat;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const HeaderContent = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;


const OrderButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;

    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    opacity: 0.85;

    width: 256px;
    font-size: 12px;height: 40px;
    border-radius: 100px;

    text-transform: uppercase;
    cursor: pointer;
`;

const InventoryButton = styled(OrderButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    height: 40px;
    width: 40px;
    margin-top: 20px;
    animation: animateBounce infinite 1.5s;
`;

const CallToAction = styled.div`
    margin-bottom: 30px;
`;


export default Section;
