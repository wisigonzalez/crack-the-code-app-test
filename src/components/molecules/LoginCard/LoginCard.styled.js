import styled from 'styled-components';

import lightTheme from '@styles/themes';
import { spacing } from '@styles/core/utils';

export const StyledContainer = styled.div`
    max-width: 360px;
    max-height: 480px;
    margin: 26px 0;
    flex-direction: column;
    padding: ${spacing(10, 14.2)};
    gap: ${lightTheme.gap.medium};
    z-index: ${lightTheme.zIndex.fixed};
    background: ${lightTheme.colors.bg.primary};
    border-radius: ${lightTheme.borderRadius.large};
    box-shadow: 0 2px 15px rgba(0,0,0,.1), 0 15px 40px rgba(0,0,0,.08);

`;

export const StyledTitle = styled.div`
    h4 {
        line-height: 32px;
        font-size: ${lightTheme.font.size.large};
    }
    p {
        font-size: 21px;
        line-height: 32px;
        text-decoration: none;

    }
`;

export const StyledInputContainer = styled.div`
    width: 86.5%; 
    display: flex;
    flex-direction: column;
    gap: ${lightTheme.gap.small};
`;

export const StyledFooter = styled.div`
    p {
        margin: 24px 0;
        display: flex;
        line-height: 16px;
        align-items: center;
        justify-content: center;
        font-size: ${lightTheme.font.size.medium};
    }
`;
