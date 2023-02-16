// Package / Dependency
import styled from 'styled-components';
import Section from './Section';
import HomeData from '../constants';


const Home = () => {

    return (
        <Container>
            {HomeData.map(data => (
                <Section
                    title={data.title}
                    description={data.description}
                    backgroundImg={data.backgroundImg}
                    primaryButtonContent={data.primaryButtonContent}
                    secondaryButtonContent={data.secondaryButtonContent} />
            ))}
        </Container>
    )
};


const Container = styled.div`
    height: 100vh;
`;


export default Home;
