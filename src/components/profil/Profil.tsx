import React from 'react'


export interface ProfilProps {
    user: {
        avatar_url: string;
        name:string;
        html_url: string;
        login: string;
        bio: string;
        company: string;
        blog: string;
        location: string;
        twitter_username: string;
    }
}
 
const Profil: React.FC<ProfilProps> = ({user}) => {
    return ( 
        <div id="profile">
            <div id="profile_img" style={{
                backgroundImage: `url(${user.avatar_url})`,
                backgroundPosition: 'center center',
            }}></div>
            <div id="username">
                <span>{user.name}</span>
                <div>
                    <a href={user.html_url}>@{user.login}</a>
                </div>
            </div>
            <div id="userbio">
                {user.bio}
            </div>
            <div id="about">
                <span>
                    <i className="fas fa-users"></i> &nbsp; {user.company}
                </span>
                <span>
                    <i className="fas fa-link"></i> &nbsp;<a href={user.blog}>{user.blog}</a>
                </span>
                <span>
                    <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp; {user.location}
                </span>
                <div className="socials">
                    <span>
                        <a href={`https://www.twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer" className="socials"><i className="fab fa-twitter"></i></a>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Profil;