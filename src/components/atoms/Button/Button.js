import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

const Button = ({text, handleCick}) => (
    <StyledButton>
        <button data-testid="button-id" onClick={handleCick}>{text}</button>
    </StyledButton>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleCick: PropTypes.func.isRequired
};

export { Button };
