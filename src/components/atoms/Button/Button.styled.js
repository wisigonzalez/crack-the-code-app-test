import styled from 'styled-components';

import lightTheme from '@styles/themes';
import colors from '@styles/core/colors';
import { spacing } from '@styles/core/utils';

export const StyledButton = styled.div`
    button {
        opacity: 1;
        border: none;
        height: 48px;
        display: flex;
        margin: 0 auto;
        cursor: pointer;
        font-weight: 500;
        line-height: 21px;
        padding: 0 30px;
        align-items: center;
        color: ${colors.white};
        justify-content: center;
        background: ${colors.black};
        border-radius: ${spacing(2)};
        font-size: ${lightTheme.font.size.button};
    }
    button: hover {
        background: ${colors.gray3};
    }
`;