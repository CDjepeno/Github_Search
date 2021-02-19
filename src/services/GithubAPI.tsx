import axios from "axios";
import { API_PROFIL } from '../config';
import { User } from '../pages/Form';

export default class GitubService {

    static getProfil(username: string): Promise<User> {
        return axios
        .get(API_PROFIL + username)
        .then(response => response.data)
        .catch(error => this.handleError(error));
    }

    // static getobject(id: number): Promise<Object|null> {
    //     return axios
    //     .get(url)
    //     .then(response => response.json())
    //     .then(data => this.isEmpty(data) ? null : data)
    //     .catch(error => this.handleError(error));
    // }

    // static updateobject(object: object): Promise<Object> {
    //     return axios
    //     .update
    // }

    // static addobject(object: object): Promise<object> {
    //     return axios
    //     .post(url, {
    //     ...object,
    //     })
    //     .then(response => response.data)
    //     .catch(error => this.handleError(error))
    // }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error):void {
        console.error(error)
    }

}