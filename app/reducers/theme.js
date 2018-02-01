import EStyleSheet from 'react-native-extended-stylesheet';
import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

// We only want a canonical color palette, hence the import
const styles = EStyleSheet.create({
  $primaryColor: '$primaryBlue',
});

const initialState = {
  primaryColor: styles.$primaryColor,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      };
    default:
      return state;
  }
};
