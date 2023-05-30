import Image from 'next/image';
import * as Styled from './styles';

export const Input = () => {
    return (
        <Styled.Input>
            <input placeholder='Email Address' type='email' />
            <Styled.Button type='submit'><Image src='./images/icon-arrow.svg' alt='arrow' /></Styled.Button>
        </Styled.Input>
    );
};
