import { useEffect } from "react";
import useTheme from "../../../hooks/useTheme";
import QuickSearch from "../../QuickSearch/QuickSearch";

export default function Header() {

    const { setThemeController } = useTheme();

    useEffect(() => {
        setThemeController('landing');
    }, []);

    return (
        <header>
            <div className="header-container">
                <div className="d-flex align-items-center justify-content-between" style={{ gap: 16 }}>
                    <QuickSearch />
                    <h2>ofernandoavila</h2>
                    <button className="btn btn-primary mx-4"><i className="fa fa-bars"></i></button>
                </div>
            </div>
        </header>
    );
}