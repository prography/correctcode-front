export const SAY_HI = 'SAY_HI' as const;

export type RootState = {
  hi: string;
};

const initialState: RootState = {
  hi: 'hi~~',
};

const reducer = (state: RootState = initialState) => {
  return state;
};

export default reducer;
