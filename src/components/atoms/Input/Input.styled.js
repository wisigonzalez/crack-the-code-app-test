import styled from 'styled-components';

import lightTheme from '@styles/themes';
import colors from '@styles/core/colors';
import { spacing } from '@styles/core/utils';

export const StyledInput = styled.div`
    input {
        width: 100%;
        height: 3rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        border-radius: ${spacing(2)};
        font-size: ${lightTheme.font.size.medium};
        border: ${spacing(0.5)} solid ${colors.black};
    }
    input::placeholder {
        color: ${colors.gray1};
    }
    input:focus {
        outline: none;
    }
`;
