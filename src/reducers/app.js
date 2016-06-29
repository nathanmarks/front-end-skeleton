import {
  OPEN_APP_DRAWER,
  CLOSE_APP_DRAWER,
  TOGGLE_APP_DRAWER
} from '../constants';

const initialState = {
  drawerOpen: false
};

export default function update(state = initialState, action) {
  switch (action.type) {

    case OPEN_APP_DRAWER:
      return { ...state, drawerOpen: true };

    case CLOSE_APP_DRAWER:
      return { ...state, drawerOpen: false };

    case TOGGLE_APP_DRAWER:
      return { ...state, drawerOpen: !state.drawerOpen };

    default:
      return state;
  }
}
