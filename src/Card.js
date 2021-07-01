import './Card.scss'
import Accordion from './Accordion'
import { useState } from 'react';

function Card({repo, getRepoCommitData}) {
    const [isActive, setIsActive] = useState(false);

    function handleAccordionClick() {
        setIsActive(!isActive);
        if (isActive) {
            getRepoCommitData(repo.owner, repo.name)
        }
    }
 
    return (
        <div className="card" key={repo.id}>
            <div className="card__header">
                <p>{repo.name}</p>
            </div>
            <div className="card__body">
                <p>{repo.owner}</p>
                <div className="card__body-sub">
                    <img className="card__body-star" src="star.svg"></img>
                    <p>{repo.stars}</p>
                </div>
            </div>
            <button className="card__footer" onClick={() => handleAccordionClick()}>
                { isActive 
                    ? <div>
                        <img className="card__footer-caret" src="caret-up.svg"></img>
                        <Accordion isActive={isActive}/>
                      </div> 
                    : <img className="card__footer-caret" src="caret-down.svg"></img>}
                <Accordion isActive={isActive}/>
            </button>
        </div>
    )
}

export default Card;