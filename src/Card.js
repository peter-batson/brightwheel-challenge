import './Card.scss'

function Card(props) {
    return (
        <div className="card" key={props.repo.id}>
            <div className="card__header">
                <p>{props.repo.name}</p>
            </div>
            <div className="card__body">
                <p>{props.repo.owner}</p>
                <p>{props.repo.stars}</p>
            </div>
        </div>
    )
}

export default Card;