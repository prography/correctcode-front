import { createAction } from 'utils/redux';
import { Device } from 'models/device';

export const updateDevice = createAction<Partial<Device>>('UPDATE_DEVICE');
