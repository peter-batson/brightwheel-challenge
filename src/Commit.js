
import './Commit.scss'
 
const Commit = (commit) => {
    const formattedDate = new Date(commit.commit.date).toString()
    return (
            <li className="commit">
                <span className="commit__header">
                    <h3>{commit.commit?.name}</h3>
                    <div>{formattedDate}</div>
                </span>
                <div>{commit.commit?.message}</div>

            </li>
    )
}

export default Commit;