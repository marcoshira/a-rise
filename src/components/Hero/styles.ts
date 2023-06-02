import styled, { css } from 'styled-components';

export const Hero = styled.img`
  ${({ theme }) => css`
    max-height: 100vh;
    width: auto;

    @media ${theme.media.mobile} {
      width: 100%;
      height: 90vw;
      object-fit: cover;
      object-position: top;

      position: absolute;
      top: 100px;
    }
  `}
`;
