import styled, { css } from 'styled-components';

export const Input = styled.label`
  ${({ theme }) => css`
    position: relative;
    input {
      border-radius: 30px;
      border: 1px solid ${theme.colors.primaryColor};
      padding: 18px 35px;
      width: 100%;
      font-family: inherit;
      font-size: 18px;
      color: ${theme.colors.primaryColor};

      ::placeholder {
        color: ${theme.colors.primaryColor};
        font-family: ${theme.font.family};
        font-weight: 300;
        letter-spacing: 2px;
        opacity: 0.6;
      }

      &:focus {
        outline: none;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: -20px;
    right: 0px;
    background: ${theme.gradients.secondary};
    height: 55px;
    width: 95px;
    border-radius: 30px;
    border: 0px solid ${theme.colors.secondaryColor};
    opacity: 0.8;
    transition: all 300ms ease;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  `}
`;
