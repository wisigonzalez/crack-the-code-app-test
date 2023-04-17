
import styled from 'styled-components';

import lightTheme from '@styles/themes';
import colors from '@styles/core/colors';

export const StyledContainer = styled.div`
    min-height: 100vh;
    grap: ${lightTheme.gap.large};
    background: ${colors.bluePurpleGradient};
`;