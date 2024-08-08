import { useEffect } from "react";
import useTheme from "../../../hooks/useTheme";
import QuickSearch from "../../QuickSearch/QuickSearch";
import Logo from "../../logo/Logo";
import MainMenu from "../main-menu/MainMenu";

export default function Header() {

    const { setThemeController } = useTheme();

    useEffect(() => {
        setThemeController('landing');
    }, []);

    return (
        <header>
            <div className="header-container">
                <QuickSearch />
                <Logo />
                <MainMenu/>
            </div>
        </header>
    );
}