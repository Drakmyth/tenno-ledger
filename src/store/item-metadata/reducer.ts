import { ItemMetadataMap, ItemMetadata } from './types';
import { ItemMetadataAction } from './actions';
import Immutable from 'immutable';

export default (state: ItemMetadataMap = Immutable.Map<string, ItemMetadata>(), action: ItemMetadataAction) => {
    switch (action.type) {
        default:
            return state;
    }
}