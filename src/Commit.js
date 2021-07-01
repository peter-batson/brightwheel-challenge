


const Commit = (props) => {
    console.log('commit child',props)
    return (
            <li>
                <h3>{props.commit?.name}</h3>
                <div>{props.commit?.date}</div>
                <div>{props.commit?.message}</div>

            </li>
    )
}

export default Commit;