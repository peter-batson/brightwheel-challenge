import { useState } from 'react';
import './Accordion.scss';

const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className="accordion">
                <h3>{props.title}</h3>
                <div>{props.content}</div>
            </div>
        </>
    )
}

export default Accordion;