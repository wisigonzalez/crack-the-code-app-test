import base from './base';
import colors from '../core/colors';
import { themes } from '@constants/index';

const light = {
  ...base,
  name: themes.LIGHT,
  colors: {
    separator: {
      primary: colors.white
    },
    border: {
      primary: colors.white,
      secondary: colors.black
    },
    bg: {
      primary: colors.white,
      secondary: colors.black,
    },
    font: {
      primary: colors.black,
      secondary: colors.white,
    }
  },
  boxShadows: {
    topHeroShadow: `0px 90px 90px ${colors.black}`
  }
};

export default light;
