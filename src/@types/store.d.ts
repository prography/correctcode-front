import { RootState } from 'store';
import { AnyAction } from 'redux';

declare global {
  type StoreState = RootState;
  type TypedActionCreator<Type extends string> = {
    (...args: any[]): AnyAction<Type>;
    type: Type;
  };
  type EntitySchema = {
    request: {
      (...args: any[]): AnyAction<Type>;
      type: Type;
    };
    success: {
      (...args: any[]): AnyAction<Type>;
      type: Type;
    };
    failure: {
      (...args: any[]): AnyAction<Type>;
      type: Type;
    };
    service: (...args: any[]) => any;
  };
  type EntityActions<T extends EntitySchema> = ReturnType<
    T['action'][keyof T['action']]
  >;
}
