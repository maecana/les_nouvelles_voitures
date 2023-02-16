// Package / Dependency Imports
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const Section = ({ title, description, backgroundImg, primaryButtonContent, secondaryButtonContent}) => {
    return (
        <Wrap bg={backgroundImg}>
            <Fade bottom>
                <HeaderContent>
                    <h1>{title || ''}</h1>
                    <p>{description || ''}</p>
                </HeaderContent>
            </Fade>

            <Fade bottom>
                <CallToAction>
                    <ButtonGroup>
                        <PrimaryButtonContent>{primaryButtonContent || 'Order'}</PrimaryButtonContent>
                        {secondaryButtonContent && <SecondaryButtonContent>{secondaryButtonContent || 'Inventory'}</SecondaryButtonContent>}
                    </ButtonGroup>

                    <DownArrow src="/images/down-arrow.svg" />
                </CallToAction>
            </Fade>
        </Wrap>
    )
};


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: ${props => `url("images/${props.bg}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-);
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


const PrimaryButtonContent = styled.div`
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

const SecondaryButtonContent = styled(PrimaryButtonContent)`
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
