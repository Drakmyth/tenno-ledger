import { ItemState, UserCollection, ItemComponentState } from './types';
import { UserCollectionAction } from './actions';
import Immutable from 'immutable';

const defaultItemState: ItemState = {
    acquired: false,
    components: Immutable.Map<string, ItemComponentState>()
}

const item = (state: ItemState = defaultItemState, action: UserCollectionAction) => {
    switch (action.type) {
        case 'ACQUIRE_ITEM':
            return Object.assign({}, state, {
                acquired: true
            });
        default:
            return state;
    }
}

export default (state: UserCollection = Immutable.Map<string, ItemState>(), action: UserCollectionAction) => {
    switch (action.type) {
        case 'ACQUIRE_ITEM':
            state.set(action.itemName, item(state.get(action.itemName), action));
            break;
        // if item is already in collection
        //// set acquired to true
        // else
        //// add item to collection
        //// set acquired to true
        default:
            return state;
    }
}