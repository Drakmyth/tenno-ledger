import { UserProfile } from './types';
import { UserProfileAction } from './actions';

export default (s: UserProfile = {}, action: UserProfileAction) => {
    switch (action.type) {
        default:
            return s;
    }
}