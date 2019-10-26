import { RootState } from 'store';

declare global {
  type StoreState = RootState;
  type EntityActions<T extends { [K in keyof T]: T[K] }> = T[keyof T] extends (
    ...args: any[]
  ) => any
    ? ReturnType<T[keyof T]>
    : T[keyof T];
}
