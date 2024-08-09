import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/service/API";
import Header from "../components/landing-page/header/Header";
import PostCard from "../components/post-card/PostCard";
import useTheme from "../hooks/useTheme";
import { Post as PostModel } from "../models/Post";

export default function Post() {
    const navigate = useNavigate();
    const { ToggleThemeButton } = useTheme();

    const { id } = useParams();

    
    const [post, setPost] = useState<PostModel | null>(null);
    
    useEffect(() => {
        const api = new API();

        if(id) {
            api.getPostById(parseInt(id))
                .then( data => setPost(data));
        }

    }, [id]);

    if(!post) return <></>;
    
    return <>
        <ToggleThemeButton />
        <div id="landing-page">
            <div id="home">
                <Header />
                <main className="container">
                    <div className="post" dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                        
                    </div>
                </main>
            </div>
        </div>
    </>;
}