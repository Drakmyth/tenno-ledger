import { Action } from 'redux';

interface LogInAction extends Action<'LOGIN'> {
    username: string,
    password: string
}

interface LogOutAction extends Action<'LOGOUT'> {

}

export type ItemMetadataAction = LogInAction | LogOutAction

export const logIn = (username: string, password: string): ItemMetadataAction => ({
    type: 'LOGIN',
    username,
    password
})

export const logOut = (): ItemMetadataAction => ({
    type: 'LOGOUT'
})