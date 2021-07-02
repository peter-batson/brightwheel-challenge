import './Card.scss'

function Card({repo}) {
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
        </div>
    )
}

export default Card;