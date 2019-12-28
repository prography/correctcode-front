export enum ToastType {
  Default = 'default',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}
export type Toast = {
  id: string;
  type: ToastType;
  message: string;
  timeout: number;
};
