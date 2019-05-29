import { Action } from 'redux';

interface LogInAction extends Action<'LOGIN'> {
    username: string,
    password: string
}

interface LogOutAction extends Action<'LOGOUT'> {

}

export type UserProfileAction = LogInAction | LogOutAction

export const logIn = (username: string, password: string): UserProfileAction => ({
    type: 'LOGIN',
    username,
    password
})

export const logOut = (): UserProfileAction => ({
    type: 'LOGOUT'
})