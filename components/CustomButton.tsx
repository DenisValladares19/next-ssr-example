import { Button } from 'antd';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface CustomButtonProps {
    style?: CSSProperties;
    color: 'primary' | 'secondary';
    outline?: boolean;
    children: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    htmlType?: 'submit' | 'reset' | 'button';
    onClick?: () => void | Function;
}

const CustomButton = (props: CustomButtonProps) => {
    return <Wrapper {...props}>{props.children}</Wrapper>;
};

const Wrapper = styled(Button)<CustomButtonProps>`
    border-radius: 15px !important;
    padding: 0 30px !important;
    color: ${({ color }) => `var(--${color}-color)`} !important;
    border: 2px solid ${({ color }) => `var(--${color}-color)`} !important;
    height: 35px !important;
    text-transform: uppercase;
    font-size: 15px !important;
    font-weight: bold !important;

    :hover,
    :focus,
    :active {
        background-color: ${({ color }) => `var(--${color}-color)`} !important;
        color: var(--white-color) !important;
    }
`;

export default CustomButton;
