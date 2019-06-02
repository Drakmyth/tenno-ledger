import React, { FunctionComponent } from 'react';
import './tooltip.component.css';

interface TooltipProps {
    text: string;
}

const TooltipComponent: FunctionComponent<TooltipProps> = (props) => (
    <div className="Tooltip">
        <span className="TooltipText">{props.text}</span>
        {props.children}
    </div>
);

export default TooltipComponent;