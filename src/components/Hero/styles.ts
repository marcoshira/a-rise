import styled, { css } from 'styled-components';

export const Hero = styled.img`
    ${({ theme }) => css`
        max-height: 100vh;
        width: auto;
    `}
`;
