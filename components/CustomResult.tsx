import { Result } from 'antd';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface CustomResultProps {
    style?: CSSProperties;
    status: '500' | '404' | 'info' | 'success' | 'error' | 'warning';
    extra?: ReactNode;
    title?: ReactNode;
    subTitle?: ReactNode;
    icon?: ReactNode;
}

const CustomResult = (props: CustomResultProps) => {
    return (
        <Wrapper style={props.style}>
            <Result {...{ ...props, style: null }} />
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

export default CustomResult;
