import { useState } from 'react';

const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <h3>{props.title}</h3>
            <div>{props.content}</div>
        </>
    )
}