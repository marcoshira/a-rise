import * as Styled from './styles';

export const Input = () => {
    return (
        <Styled.Input>
            <input placeholder='Email Address' type='email' />
            <Styled.Button type='submit'><img src='./images/icon-arrow.svg' /></Styled.Button>
        </Styled.Input>
    );
};
