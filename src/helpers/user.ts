import { IUser } from '@Types/user'

const USER_FIELD_LS = 'user'

export const setUserDataInLS = (user: IUser) => {
  window.localStorage.setItem(USER_FIELD_LS, JSON.stringify(user))
}

export const getUserDataFromLS = (): IUser => {
  return JSON.parse(window.localStorage.getItem(USER_FIELD_LS))
}
