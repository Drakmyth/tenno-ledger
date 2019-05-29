import { Action } from 'redux';

interface LogInAction extends Action<'LOGIN'> {
    username: string,
    password: string
}

interface LogOutAction extends Action<'LOGOUT'> {

}

export type UserCollectionAction = LogInAction | LogOutAction;

export const logIn = (username: string, password: string): UserCollectionAction => ({
    type: 'LOGIN',
    username,
    password
});

export const logOut = (): UserCollectionAction => ({
    type: 'LOGOUT'
});