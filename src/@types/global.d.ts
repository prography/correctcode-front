type Status = 'INIT' | 'FETCHING' | 'SUCCESS' | 'FAILURE';
type Service<A extends any[], R> = (...args: A) => Promise<R>;
