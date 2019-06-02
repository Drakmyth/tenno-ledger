import { Action } from 'redux';

interface AcquireItemAction extends Action<'ACQUIRE_ITEM'> {
    itemName: string
}

interface LoseItemAction extends Action<'LOSE_ITEM'> {
    itemName: string
}

interface AcquireItemComponentAction extends Action<'ACQUIRE_COMPONENT'> {
    itemName: string,
    componentName: string
}

interface LoseItemComponentAction extends Action<'LOSE_COMPONENT'> {
    itemName: string,
    componentName: string
}

export type UserCollectionAction = AcquireItemAction |
                                   LoseItemAction |
                                   AcquireItemComponentAction |
                                   LoseItemComponentAction;

export const acquireItem = (itemName: string): UserCollectionAction => ({
    type: 'ACQUIRE_ITEM',
    itemName
});

export const loseItem = (itemName: string): UserCollectionAction => ({
    type: 'LOSE_ITEM',
    itemName
});

export const acquireItemComponent = (itemName: string, componentName: string): UserCollectionAction => ({
    type: 'ACQUIRE_COMPONENT',
    itemName,
    componentName
});

export const loseItemComponent = (itemName: string, componentName: string): UserCollectionAction => ({
    type: 'LOSE_COMPONENT',
    itemName,
    componentName
});