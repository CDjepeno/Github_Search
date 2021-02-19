import axios from "axios";
import { API_PROFIL } from '../config';
import { User } from '../App';
import Repos from '../App';


export interface Repos {
    full_name: string;
    description: string;
    language: string
    stargazers_count: number;
    forks_count: number
}

export default class GitubService {

    static getProfil(username: string): Promise<User> {
        return axios
        .get(API_PROFIL + username)
        .then(response => response.data)
        .catch(error => this.handleError(error));
    }

    static getRepos(user: string): Promise<Repos[]> {
        return axios
        .get(`https://api.github.com/users/${user}/repos`)
        .then(response => response.data)
        .then(data => this.isEmpty(data) ? null : data)
        .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error):void {
        console.error(error)
    }

}