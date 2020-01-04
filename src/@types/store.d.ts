import { RootState } from 'store';

declare global {
  type StoreState = RootState;
  type EntitySchema = {
    request: (...p: any[]) => any;
    success: (...p: any[]) => any;
    failure: (...p: any[]) => any;
    update: (...p: any[]) => any;
    reset: (...args: any[]) => any;
    service: (...args: any[]) => any;
  };
  type EntityActions<T extends EntitySchema> = ReturnType<
    T['action'][keyof T['action']]
  >;
}
