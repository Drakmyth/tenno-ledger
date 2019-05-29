import { UserCollectionMap, UserCollection } from './types';
import { UserCollectionAction } from './actions';
import Immutable from 'immutable';

export default (state: UserCollectionMap = Immutable.Map<string, UserCollection>(), action: UserCollectionAction) => {
    switch (action.type) {
        default:
            return state;
    }
}