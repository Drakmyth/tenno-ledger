import Immutable from 'immutable';

export interface ItemState {
    acquired: boolean,
    components: Immutable.Map<string, ItemComponentState>
}

export interface ItemComponentState {
    acquired: boolean
}

export type UserCollection = Immutable.Map<string, ItemState>;