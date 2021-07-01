import { useState } from 'react';
import './Accordion.scss';
import Commit from './Commit'

const Accordion = (props) => {
    console.log(props)
    return (
        <>
            <div className="accordion">
                <ul>
                    {props.commitData?.map((commit) => {
                        return <Commit commit={commit} />
                    })}
                </ul>
            </div>
        </>
    )
}

export default Accordion;