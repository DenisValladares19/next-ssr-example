import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <h4>Footer</h4>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: aliceblue;
    align-items: center;
    height: 50px;
`;

export default Footer;
