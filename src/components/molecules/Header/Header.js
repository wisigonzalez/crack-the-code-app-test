import Image from 'next/image';

import { StyledLogo } from './Header.styled';
import { Container } from '@components/templates';

const Header = () => (
    <Container>
        <StyledLogo>
            <Image
                alt='crack-the-code-logo'
                quality={100}
                loading='eager'
                priority
                src='/icons/crack-the-code.svg'
                width={83}
                height={56}
            />
        </StyledLogo>
    </Container>
);

export { Header };
