import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <h4>Header</h4>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: aliceblue;
    align-items: center;
    height: 100px;
`;

export default Header;
