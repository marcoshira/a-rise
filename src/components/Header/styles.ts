import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: 100px;

    @media ${theme.media.mobile} {
      margin-bottom: 370px;
      padding-top: 32px;
      padding-left: 32px;

      img {
        height: 24px;
        width: 120px;
      }
    }
  `}
`;
