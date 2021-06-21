import { IAction } from '../../types/redux';

// CONSTANTS
const OPEN_MODAL: string = 'OPEN_MODAL';
const CLOSE_MODAL: string = 'CLOSE_MODAL';

// STORE
const initialState: boolean = false;

// REDUCER
export default function reducer(state = initialState, action: IModalAction): boolean {
  const ACTIONS = {
    [OPEN_MODAL]: action.payload,
    [CLOSE_MODAL]: action.payload,
  };

  return ACTIONS[action.type] || state;
}

// ACTIONS
export const openModal = (): IAction => ({
  type: OPEN_MODAL,
  payload: true,
});

export const closeModal = (): IAction => ({
  type: CLOSE_MODAL,
  payload: false,
});

// INTERFACES
interface IModalAction {
  type: string;
  payload: boolean;
}
