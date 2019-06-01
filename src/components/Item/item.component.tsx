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
            <div className="Overlay">
                <span>{props.title}</span>
                <img src={imageSrc} alt={props.title}></img>
                <ul className="Checklist">
                    <li><label><input type="checkbox"></input><span>Blueprint</span></label></li>
                    <li><label><input type="checkbox"></input><span>Neuroptics</span></label></li>
                    <li><label><input type="checkbox"></input><span>Systems</span></label></li>
                    <li><label><input type="checkbox"></input><span>Chassis</span></label></li>
                </ul>
            </div>
            <span>{props.title}</span>
            <img src={imageSrc} alt={props.title}></img>
        </div>
    );
}

export default Item;
