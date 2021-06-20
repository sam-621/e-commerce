import { IAction } from '../../types/redux';
import { IUser, IUserReduxStore } from '../../types/user';

// CONSTANTS
const UPDATE_USER_DATA: string = 'UPDATE_USER_DATA';
const UPDATE_USER_LOGGED: string = 'UPDATE_USER_LOGGED';

// STORE
const initialState: IUserReduxStore = {
  data: null,
  isLogged: null,
};

// REDUCER
export default function reducer(state = initialState, action: IUserAction): IUserReduxStore {
  const ACTIONS = {
    [UPDATE_USER_DATA]: { ...state, data: action.payload?.data },
    [UPDATE_USER_LOGGED]: { ...state, isLogged: action.payload?.isLogged },
  };

  return ACTIONS[action.type] || state;
}

// ACTIONS
export const updateUserData = (userData: IUser): IAction => ({
  type: UPDATE_USER_DATA,
  payload: userData,
});

export const updateUserLogged = (isLogged: boolean): IAction => ({
  type: UPDATE_USER_DATA,
  payload: isLogged,
});

// INTERFACES
interface IUserAction {
  type: string;
  payload: IUserReduxStore;
}
