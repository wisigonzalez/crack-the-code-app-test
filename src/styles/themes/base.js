import spacing from '../core/utils';
import breakpoints from '../core/breakpoints';

const base = {
    font: {
      family: {
        primary: "'Sofia Pro', sans-serif"
      },
      size: {
        button: '21px',
        small: '14px',
        medium: '16px',
        large: '28px',
      },
  },
  zIndex: {
    initial: 0,
    backward: -1,
    forward: 1,
    fixed: 2,
    higher: 3,
    super: 100
  },
  borderRadius: {
    none: 'unset',
    small: '3px',
    medium: '8px',
    large: '16px',
    total: '50%'
  },
  containerWidth: {
    smallMobile: { width: '90%', maxWidth: '90%' },
    mobile: { width: '90%', maxWidth: '90%' },
    tablet: { width: '85%', maxWidth: '85%' },
    desktop: { width: '70%', maxWidth: '70%' },
    screen: { width: '52%', maxWidth: '52%' },
    limitFluid: { width: '100%', maxWidth: '1920px' },
    fluid: { width: '100%', maxWidth: '100%' }
  },
  gap: {
    small: '16px',
    medium: '24px',
    large: '128px'
  },
  utils: {
    spacing
  },
  breakpoints
};

export default base;
