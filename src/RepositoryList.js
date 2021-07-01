import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { useQuery } from 'react-query'
import './RepositoryList.scss';

import Card from './Card';

function RepositoryList() {
    const GITHUB_URL = 'https://api.github.com/';
    const { isLoading, error, data } = useQuery('repoData', getTopRepositoryList)
    console.log(data?.items);
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
             const response = await axios(`${GITHUB_URL}search/repositories?q=stars:>=10000&order=desc`)
             return response.data
        }
        catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="repositoryList">
            <h1>This is a list app</h1>
            {repositoryList?.map((repo) => {
                return <Card repo={repo}/>
            })}
        </div>
    )
}

export default RepositoryList