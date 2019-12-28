import { Toast, ToastType } from 'models/toast';
import { createReducer } from 'utils/redux';
import shortid from 'shortid';
import { showToast, deleteToast } from './action';

export type ToastState = {
  toasts: Toast[];
};

const initialState: ToastState = {
  toasts: [],
};

export default createReducer(initialState, switcher => {
  switcher
    .addCase(showToast, (state, action) => {
      state.toasts.push({
        id: shortid.generate(),
        type: ToastType.Default,
        message: '',
        timeout: 3000,
        ...action.payload,
      });
    })
    .addCase(deleteToast, (state, action) => {
      state.toasts = state.toasts.filter(({ id }) => id !== action.payload);
    });
});
