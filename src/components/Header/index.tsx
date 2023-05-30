import Image from 'next/image';
import * as Styled from './styles';


export const Header = () => {
    return (
        <Styled.Header>
            <Image src='./images/logo.svg' alt='Base Apparel Logo' />          
        </Styled.Header>
    );
};
