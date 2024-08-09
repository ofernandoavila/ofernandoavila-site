import { Post } from "../../models/Post";
import { APIRoutes } from "../ApiRoutes.routes";

class API {

    private __baseUrl: string;

    constructor() {
        this.__baseUrl = process.env.REACT_APP_API_BASE_URL!;
    }

    getPosts = () => new Promise<Post[]>(async (resolve, reject) => {
        const posts = await this.__get<Post[]>(this.__baseUrl + APIRoutes.getPosts);

        resolve(posts);
    });

    getPostById = (id: number) => new Promise<Post>(async (resolve, reject) => {
        const post = await this.__get<Post>(this.__baseUrl + APIRoutes.getPostByID + id.toString());

        resolve(post);
    });

    private __get= <T>(url: string) => new Promise<T>((resolve, reject) => {
        fetch(url)
            .then( res => res.json())
            .then( data => {
                resolve(data as T);
            })
            .catch(error => reject(error));
    });
}

export default API;