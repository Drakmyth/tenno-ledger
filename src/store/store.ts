import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { UserCollectionAction } from './user-collection/actions';
import UserCollectionReducer from './user-collection/reducer';
import { UserCollection } from './user-collection/types';
import { UserProfileAction } from './user-profile/actions';
import UserProfileReducer from './user-profile/reducer';
import { UserProfile } from './user-profile/types';

export interface AppState {
    user_profile: UserProfile
    user_collection: UserCollection
}

export type Dispatch = (action: UserProfileAction | UserCollectionAction) => void;

const rootReducer = combineReducers({
    UserProfileReducer,
    UserCollectionReducer
});
const store = createStore(rootReducer);

export default store;