export const CHANGE_FIELD = 'CHANGE_FIELD';

export const changeField = (input: UserAction['input']) => ({
  type: CHANGE_FIELD,
  input,
});
