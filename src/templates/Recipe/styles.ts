import { ContentWrapperContainer } from '@/components/ContentWrapper/styles';
import styled, { css } from 'styled-components';

export const RecipeWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.secondaryColor};

        ${ContentWrapperContainer} {
            margin: 5rem 10rem;
            padding: 0;
        }
    `}
`;
