import {
  OPEN_APP_DRAWER,
  CLOSE_APP_DRAWER,
  TOGGLE_APP_DRAWER
} from './constants';

export function openDrawer() {
  return {
    type: OPEN_APP_DRAWER
  };
}

export function closeDrawer() {
  return {
    type: CLOSE_APP_DRAWER
  };
}

export function toggleDrawer() {
  return {
    type: TOGGLE_APP_DRAWER
  };
}
