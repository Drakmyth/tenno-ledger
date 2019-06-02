import React, { FunctionComponent } from 'react';
import { Item, Component } from 'warframe-items';
import './item.component.css';

interface ItemProps {
    item: Item;
}

const ItemComponent: FunctionComponent<ItemProps> = (props) => {
    const item = props.item;

    const components = buildComponents(item.components);

    return (
        <div className="Item">
            <label>
                    <input type="checkbox"></input>
                    <span>{item.name}</span>
                </label>
            <img src={getImageSrc(item.imageName)} alt={item.name} onClick={(e) => debugItem(item)}></img>
            <ul>{components}</ul>
        </div>
    );
}

const getImageSrc = (imageName: string) =>
    `https://cdn.warframestat.us/img/${imageName}`;

const buildComponents = (components: Component[] | undefined) => {
    if (!components) return [];

    return components
        .filter((component) => !component.uniqueName.includes('MiscItems'))
        .map((component, index) => (
            <li key={index}>
                <label>
                    <input type="checkbox"></input>
                    <span>{component.name}</span>
                </label>
            </li>
        ))
}

const debugItem = (item: Item) => {
    console.log(item);
}

export default ItemComponent;
