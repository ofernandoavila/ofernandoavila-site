import { useContext } from "react";
import { ThemeContext } from "../components/theme-manager/contexts/ThemeContext";

export default function useTheme() {
    const context = useContext( ThemeContext );

    return context;
}