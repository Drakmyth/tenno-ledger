import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { ItemMetadataAction } from './item-metadata/actions';
import ItemMetadataReducer from './item-metadata/reducer';
import { ItemMetadataMap } from './item-metadata/types';
import { UserCollectionAction } from './user-collection/actions';
import UserCollectionReducer from './user-collection/reducer';
import { UserCollectionMap } from './user-collection/types';
import { UserProfileAction } from './user-profile/actions';
import UserProfileReducer from './user-profile/reducer';
import { UserProfile } from './user-profile/types';

export interface AppState {
    user_profile: UserProfile
    item_metadata: ItemMetadataMap
    user_collection: UserCollectionMap
}

export type Dispatch = (action: UserProfileAction | ItemMetadataAction | UserCollectionAction) => void;

const rootReducer = combineReducers({
    UserProfileReducer,
    ItemMetadataReducer,
    UserCollectionReducer
});
const store = createStore(rootReducer);

export default store;