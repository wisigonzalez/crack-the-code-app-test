import PropTypes from 'prop-types';

import { Input, Alert, Button } from '@components/atoms';
import { StyledContainer, StyledInputContainer, StyledTitle, StyledFooter } from './LoginCard.styled'

const LoginCard = ({loginCard}) => { 
    const {title, subtitle, userInput, passwordInput, alert, buttonText, footerText} = loginCard;
    const handlePressButton = () => (console.log('*** handle pess button ***'));
    const handlePressInput = () => (console.log('*** handle pess input ***'));

    return (
        <StyledContainer>
            <StyledTitle>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </StyledTitle>
            <StyledInputContainer>
                <Input type={userInput.type} placeholder={userInput.placeholder} handleChange={handlePressInput} />
                <Input type={passwordInput.type} placeholder={passwordInput.placeholder} handleChange={handlePressInput} />
            </StyledInputContainer>
            <Alert hightLightText={alert.hightLightText} text={alert.text} />
            <Button text={buttonText} handleCick={handlePressButton} />
            <StyledFooter>
                <p>{footerText}</p>
            </StyledFooter>
        </StyledContainer>
    );
};

LoginCard.propTypes = {
    loginCard: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        userInput: PropTypes.shape({
            type: PropTypes.string,
            placeholder: PropTypes.string
        }),
        passwordInput: PropTypes.shape({
            type: PropTypes.string,
            placeholder: PropTypes.string
        }),
        alert: PropTypes.shape({
            hightLightText: PropTypes.string,
            text: PropTypes.string
        }),
        buttonText: PropTypes.string,
        footerText: PropTypes.string,
      }).isRequired
};

export { LoginCard };
