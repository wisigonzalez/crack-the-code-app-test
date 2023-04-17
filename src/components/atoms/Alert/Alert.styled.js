import styled from 'styled-components';

import lightTheme from '@styles/themes';
import colors from '@styles/core/colors';
import { spacing } from '@styles/core/utils';

export const StyledAlert = styled.div`
    margin: 15px 0;
    padding: 6px 28px;
    line-height: 21px;
    background: ${colors.gray2};
    border-radius: ${spacing(1.5)};
    font-size: ${lightTheme.font.size.small}

`;
