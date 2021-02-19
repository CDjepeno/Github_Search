import React from 'react'


export interface RepoProps {
    repo: {
        html_url: string;
        full_name: string;
        description: string;
        language: string;
        stargazers_count: number;
        forks_count: number;
    }
}
 
const Repo: React.FC<RepoProps> = ({repo}) => {
    return ( 
        <a href={repo.html_url} rel="noreferrer" target="_blank">
            <section>
                <div className="section_title">{repo.full_name}</div>
                <div className="about_section">
                    <span>{repo.description}</span>
                </div>
                <div className="bottom_section">
                    <span>
                        <i className="fas fa-code"></i>&nbsp; {repo.language}
                    </span>
                    <span>
                        <i className="fas fa-star"></i>&nbsp; {repo.stargazers_count}
                    </span>
                    <span>
                        <i className="fas fa-code-branch"></i>&nbsp; {repo.forks_count}
                    </span>
                </div>
            </section>
        </a>
     );
}
 
export default Repo;