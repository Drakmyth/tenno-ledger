import React, { FunctionComponent } from 'react';
import './item.component.css';

interface ItemProps {
    title: string;
    image: string;
}

const Item: FunctionComponent<ItemProps> = (props) => {
    const imageSrc = `https://cdn.warframestat.us/img/${props.image}`

    return (
        <div className="Item">
            <img src={imageSrc} alt={props.title}></img>
            <span>{props.title}</span>
        </div>
    );
}

export default Item;
