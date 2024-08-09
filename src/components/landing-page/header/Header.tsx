import { useEffect } from "react";
import useTheme from "../../../hooks/useTheme";
import QuickSearch from "../../QuickSearch/QuickSearch";
import Logo from "../../logo/Logo";
import MainMenu from "../main-menu/MainMenu";

export default function Header() {

    const { setThemeController, isHeaderScrolled } = useTheme();

    useEffect(() => {
        setThemeController('landing');
    }, []);

    return (
        <header className={`${ isHeaderScrolled ? 'header-fixed' : '' }`}>
            <div className="header-container">
                <QuickSearch />
                <Logo />
                <MainMenu/>
            </div>
        </header>
    );
}