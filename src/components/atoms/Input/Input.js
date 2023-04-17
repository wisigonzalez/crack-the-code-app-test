import PropTypes from 'prop-types';

import { StyledInput } from './Input.styled';

const Input = ({type, placeholder, handleChange}) => (
    <StyledInput>
        <input data-testid="input-id" type={type} placeholder={placeholder} onChange={handleChange} />
    </StyledInput>
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export { Input };
