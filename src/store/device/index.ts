import { createReducer } from 'utils/redux';
import { updateDevice } from './action';
import { Device } from 'models/device';
import { MOBILE_WIDTH } from 'constants/device';

export type DeviceState = Device;

const initialState: DeviceState = {
  isMobile: window.innerWidth < MOBILE_WIDTH,
};

export default createReducer(initialState, switcher => {
  switcher.addCase(updateDevice, (state, action) => {
    state = {
      ...state,
      ...action.payload,
    };
    return state;
  });
});
