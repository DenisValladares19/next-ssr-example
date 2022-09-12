import { Empty } from 'antd';
import { CSSProperties } from 'react';
import styled from 'styled-components';

interface CustomEmptyProps {
    style?: CSSProperties;
}

const CustomEmpty = ({ style }: CustomEmptyProps) => {
    return (
        <Wrapper style={style}>
            <Empty description="No hay datos" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export default CustomEmpty;
