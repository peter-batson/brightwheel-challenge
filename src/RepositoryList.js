import React from "react";
import axios from 'axios';
import { useQuery } from 'react-query';
import { useState } from 'react';
import './RepositoryList.scss';

import Card from './Card';

const RepositoryList = () => {
    const GITHUB_URL = 'https://api.github.com/';
    const [commitData, setCommitData] = useState([])
    const repositories = useQuery('repoData', getTopRepositoryList)
    const repositoryList = repositories.data?.items.map((repo) => {
        return {
            id: repo.id,
            owner: repo.owner.login,
            name: repo.name,
            stars: repo.watchers
        }
    })
    console.log('repositoryList',repositoryList)

    async function getTopRepositoryList() {
        try {
             const response = await axios(`${GITHUB_URL}search/repositories?q=stars:>=10000&order=desc`)
             return response.data
        }
        catch(err) {
            console.error(err)
        }
    }

    async function getRepoCommitData(owner, repo) {
        console.log('owner', owner, 'repo', repo)
        setCommitData([])
        try {
             const response = await axios(`${GITHUB_URL}repos/${owner}/${repo}/commits`)
             console.log('response', response)
             const commitData = response.data?.map((commit, i) => {
                    return {
                        name: commit.commit.author.name,
                        date: commit.commit.author.date,
                        message: commit.commit.message
            
                    }
                })
             setCommitData(commitData)
             console.log('commitData', commitData)
        }
        catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="repositoryList">
            <h1 className="repositoryList__header">This is a list app</h1>
            <div className="repositoryList__body">
                {repositoryList?.map((repo) => {
                    return <Card repo={repo} getRepoCommitData={getRepoCommitData} commitData={commitData}/>
                })}
            </div>
        </div>
    )
}

export default RepositoryList