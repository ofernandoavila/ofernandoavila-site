import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import QuickSearch from "../components/QuickSearch/QuickSearch";
import ModalContextProvider from "../components/modal/context/ModalContext";
import Header from "../components/landing-page/header/Header";

export default function Home() {

    const navigate = useNavigate();
    const { ToggleThemeButton } = useTheme();

    return <>
        <ToggleThemeButton />
        <div id="landing-page">
            <Header />
        </div>
    </>;

}