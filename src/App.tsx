import axios from 'axios';
import React, { useState } from 'react'
import Page from './components/page/Page';
import GitubService from './services/GithubAPI';

export interface User {
    name: string; 
}

interface Repos {
    full_name: string;
    description: string;
    language: string
    stargazers_count: number;
    forks_count: number
}
 
const App: React.FC = () => {

    const [user, setUser] = useState<User>({
        name: "" 
    });

    const [repos, setRepos] = useState<Repos[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        setIsLoading(true); 
        const userProfil = await GitubService.getProfil(user.name);
        const repoProfil = await GitubService.getRepos(user.name)
            
        if(userProfil && repoProfil) {
            setIsLoading(false)
            setUser(userProfil)
            setRepos(repoProfil)

        } else {
            setUser({...user, name: " "})
            setIsLoading(false)
            setError(true);
        }
    }

    return (<>
        { repos && repos.length ?
            <Page user={user} repos={repos} />
            :
            <form onSubmit={handleSubmit} className="form-options">
                <i className="fab fa-github"></i>
                <div className="form-options__row form-options__row--user">
                    <input 
                    type="text" 
                    name="name" 
                    value={user.name}
                    onChange={(e) => setUser({...user , name:e.target.value})}
                    placeholder="Votre pseudo Github" 
                    />
                    <button>
                        {isLoading ?
                            <i className="fas fa-spinner fa-spin" />
                        :
                            <i className="fas fa-arrow-circle-right" />
                        }
                    </button>
                </div>
                { error && <p className="error">Profil github inconnu</p>}
            </form>
        }
      </>);
}
 
export default App;