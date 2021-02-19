import React, { useState } from 'react';
import GitubService from '../services/GithubAPI';


export interface User {
  avatar_url?: string;
  html_url?: string;
  name: string;
  login?: string;
  company?: string;
  blog?: string;
  location?: string;
  twitter_username?: string;

}
 
const Form: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    avatar_url: "",
    html_url: "",
    login: "",
    company: "",
    blog: "",
    location: "",
    twitter_username: ""
  });
  const [repos, setRepos] = useState<object>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const handleChange = (e: any) => {
    const {value, name} = e.currentTarget;    
    setUser({...user, [name] : value})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    try {
     const userProfil = await GitubService.getProfil(user.name);     
     setUser(userProfil)
    } catch (error) {
      console.log(error);  
    }
  }

  console.log(user);
  

  return ( <>
    <form onSubmit={handleSubmit} className="form-options">
        <i className="fab fa-github"></i>
        <div className="form-options__row form-options__row--user">
            <input 
              type="text" 
              value={user.name} 
              onChange={handleChange}
              name="name" 
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
  </> );
}
 
export default Form;
