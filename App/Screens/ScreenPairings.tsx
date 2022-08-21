/* eslint sort-keys: 0 */
import { ObjectType } from '@Types';

import { SCREEN_NAMES } from './ScreenNames';

/* Auth Screens */

import HomeScreen from './Main/Home';

/**************************************************
  Connect SCREEN_NAMES and Screen components below
***************************************************/
let screens: ObjectType = {};

/* Navigate in Auth Stacks */

screens[SCREEN_NAMES.HOME] = HomeScreen;

export const SCREENS: ObjectType = screens;
