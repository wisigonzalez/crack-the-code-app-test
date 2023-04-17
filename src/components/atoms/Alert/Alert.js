import PropTypes from 'prop-types';

import { StyledAlert } from './Alert.styled';

const Alert = ({hightLightText, text}) => (
    <StyledAlert>
        <p><b>{hightLightText}</b> {text}</p>
    </StyledAlert>
);

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    hightLightText: PropTypes.string.isRequired,
};

export { Alert };
