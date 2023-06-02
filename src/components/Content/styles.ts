import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    width: 70%;
    padding: 60px 270px 80px 200px;

    h1 {
      margin: 0;
      margin-bottom: 5px;
    }

    @media ${theme.media.mobile} {
      width: 100%;
      padding: 0;
    }
  `}
`;

export const Title1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-size: 60px;
    font-weight: 300;
    letter-spacing: 18px;

    @media ${theme.media.mobile} {
      font-size: 40px;
      text-align: center;
    }
  `}
`;

export const Title2 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral};
    font-size: 60px;
    font-weight: 600;
    letter-spacing: 17px;

    @media ${theme.media.mobile} {
      font-size: 40px;
      text-align: center;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 50px;

    @media ${theme.media.mobile} {
      text-align: center;
      padding: 0 28px;
      font-size: 15px;
      margin-bottom: 30px;
    }
  `}
`;
