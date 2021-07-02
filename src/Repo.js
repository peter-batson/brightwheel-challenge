import { useParams, Link} from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';
import Commit from './Commit';
import './Repo.scss'
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Repo = () => {
    const GITHUB_URL = 'https://api.github.com/';
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
    const { owner, name } = useParams()
    const { isLoading, data } = useQuery(['commitData', owner, name], () => getRepoCommitData(owner, name))
    const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));

    async function getRepoCommitData(owner, repo) {
        try {
            const response = await axios(`${GITHUB_URL}repos/${owner}/${repo}/commits?since=${yesterday}`)
            return response.data
        }
        catch(err) {
            console.error(err)
        }
    }

    if (isLoading){
        return <PacmanLoader color={"#3f4da7"} loading={isLoading} css={override} size={150} />
    }

    const commitData = data?.map((commit, i) => {
        return {
            name: commit.commit.author.name,
            date: commit.commit.author.date,
            message: commit.commit.message
        }
    })

    return (
        <div className="repo">
            <h2 className="repo__header">Commit List</h2>
            <Link to="/">Back to the list</Link>
            {commitData.length > 0 
            ? <ul>
                {commitData.map((commit) => {
                    return <Commit commit={commit}/>
                })}
              </ul>
            : <h4>Sorry no commits in the last 24 hours</h4>}
            
        </div>

    )
}

export default Repo;