import { Toast } from 'models/toast';
import { createAction } from 'utils/redux';

export const showToast = createAction<Partial<Toast>>('SHOW_TOAST');
export const deleteToast = createAction<string>('DELETE_TOAST');

export type ShowToast = ReturnType<typeof showToast>;
export type DeleteToast = ReturnType<typeof deleteToast>;
