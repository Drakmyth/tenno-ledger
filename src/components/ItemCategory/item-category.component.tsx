import React, { FunctionComponent } from 'react';
import './item-category.component.css';
import { Item } from 'warframe-items';
import ItemComponent from '../Item/item.component'

export interface ItemCategoryProps {
    title: string;
    items: Item[];
}

const ItemCategory: FunctionComponent<ItemCategoryProps> = (props) => {

    const elements = [];
    let index = 0;

    for (const item of props.items) {
        elements.push(<ItemComponent item={item} key={index}></ItemComponent>);
        index++;
    }

    return (
        <div className="ItemCategory">
            <header>
                <span>{props.title}</span>
            </header>
            <div className="Items">
                {elements}
            </div>
        </div>
    );
}

export default ItemCategory;
