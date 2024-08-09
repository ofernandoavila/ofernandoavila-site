import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import QuickSearch from "../components/QuickSearch/QuickSearch";
import ModalContextProvider from "../components/modal/context/ModalContext";
import Header from "../components/landing-page/header/Header";
import PostCard from "../components/post-card/PostCard";

export default function Home() {

    const navigate = useNavigate();
    const { ToggleThemeButton } = useTheme();

    return <>
        <ToggleThemeButton />
        <div id="landing-page">
            <div id="home">
                <Header />
                <main className="container">
                    <ul className="posts">
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                        <li><PostCard/></li>
                    </ul>
                </main>
            </div>
        </div>
    </>;

}