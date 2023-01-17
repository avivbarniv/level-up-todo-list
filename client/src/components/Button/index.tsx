import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
`;

interface ButtonProps {
    onClick: () => void;
    text: string;
}

const Button = ({
    onClick,
    text    
}: ButtonProps) => {

    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}

export default Button;

Button.defaultProps = {
    text: 'Submit'
}