import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: 100px;

    @media ${theme.media.mobile} {
      margin-bottom: 500px;
      padding-top: 34px;
      padding-left: 34px;

      img {
        height: 26px;
        width: 130px;
      }
    }
  `}
`;
