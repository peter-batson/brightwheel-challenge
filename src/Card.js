import './Card.scss'
import Accordion from './Accordion'
import { useCallback, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query'

function Card({repo, getRepoCommitData}) {
    const GITHUB_URL = 'https://api.github.com/';
    const [isActive, setIsActive] = useState(false);
    const [clicked, setClicked] = useState(false)
    if (!isActive && clicked) {
        console.log(isActive, clicked)
        getRepoCommitData(repo.owner, repo.name)
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
            <button className="card__footer" onClick={() =>  {setIsActive(!isActive); setClicked(true)}}>
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