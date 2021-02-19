import React from 'react'
import Profil from '../profil/Profil'
import Repos from '../repos/Repos'


export interface PageProps {
    user: any;
    repos: any;
}
 
const Page: React.FC<PageProps> = ({user, repos}) => {
    return (<>  
        <Profil user={user} />
        <Repos repos={repos} />
    </>);
}
 
export default Page;