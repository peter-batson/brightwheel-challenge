import React from "react";
import axios from 'axios';
import { useQuery } from 'react-query';
import './RepositoryList.scss';
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

import Card from './Card';

const RepositoryList = () => {
    const GITHUB_URL = 'https://api.github.com/';
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        `;
    const { isLoading, data } = useQuery('repoData', getTopRepositoryList)
    const repositoryList = data?.items.map((repo) => {
        return {
            id: repo.id,
            owner: repo.owner.login,
            name: repo.name,
            stars: repo.watchers
        }
    })

    async function getTopRepositoryList() {
        try {
             const response = await axios(`${GITHUB_URL}search/repositories?q=stars:>=10000&order=desc&per_page=100`)
             return response.data
        }
        catch(err) {
            console.error(err)
        }
    }

    if (isLoading){
        return <PacmanLoader color={"#3f4da7"} loading={isLoading} css={override} size={150} />
    }

    return (
        <div className="repositoryList">
            <h1 className="repositoryList__header">Top 100 Github Repositories</h1>
            <div className="repositoryList__body">
                {repositoryList?.map((repo) => {
                    return <Link to={`/repo/${repo.owner}/${repo.name}`}><Card repo={repo} /></Link>
                })}
            </div>
        </div>
    )
}

export default RepositoryList