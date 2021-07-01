import React from "react";
import axios from 'axios';
import { useQuery } from 'react-query'
import './RepositoryList.scss';

import Card from './Card';

const RepositoryList = () => {
    const GITHUB_URL = 'https://api.github.com/';
    const repositories = useQuery('repoData', getTopRepositoryList)
    const commits = useQuery('commitData', getRepoCommitData, {
        enabled: false
    })
    console.log('repositories',repositories)
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

    // const commitData = data?.map((commit, i) => {
    //     return {
    //         name: commit.commit.author.name,
    //         date: commit.commit.author.date,
    //         message: commit.commit.message

    //     }
    // })

    async function getRepoCommitData(owner, repo) {
        commits.refetch();
        try {
             const response = await axios(`${GITHUB_URL}repos/${owner}/${repo}/commits`)
             return response.data
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
                    return <Card repo={repo} getRepoCommitData={getRepoCommitData}/>
                })}
            </div>
        </div>
    )
}

export default RepositoryList