import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import Header from "../components/landing-page/header/Header";
import PostCard from "../components/post-card/PostCard";
import { Post } from "../models/Post";
import API from "../api/service/API";

export default function Home() {

    const navigate = useNavigate();
    const { ToggleThemeButton } = useTheme();

    
    const [posts, setPosts] = useState<Post[]>([]);
    
    useEffect(() => {
        const api = new API();

        api.getPosts()
            .then( data => setPosts(data));

    }, []);

    if(posts.length === 0) return <></>;

    return <>
        <ToggleThemeButton />
        <div id="landing-page">
            <div id="home">
                <Header />
                <main className="container">
                    <ul className="posts">
                        { posts.map( post => (
                            <li key={ post.id }><PostCard post={ post }/></li>
                        ) ) }
                    </ul>
                </main>
            </div>
        </div>
    </>;

}