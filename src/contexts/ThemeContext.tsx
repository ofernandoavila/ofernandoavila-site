import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextProps {
    children: ReactNode;
}

interface ThemeContextData {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    toggleTheme: () => void;
    ToggleThemeButton: () => JSX.Element;
}

export const ThemeContext = createContext({} as ThemeContextData);

export default function ThemeContextProvider({ children }: ThemeContextProps) {
    
    const [theme, setTheme] = useState<string>('dark');
    
    const toggleTheme = () => {
        return setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const ToggleThemeButton = () => (
        <div style={{ position: 'absolute', top: 16, right: 16 }} >
            <div className="form-group">
                <span className="toggle-switch">
                    <input id="switch-rounded" type="checkbox" checked={ theme !== 'light' } onChange={ toggleTheme }/>
                    <label htmlFor="switch-rounded">
                        <i className={` fa ${ theme === 'light' ? 'fa-moon' : 'fa-sun' } `}></i>
                    </label>
                </span>
            </div>
        </div>
    );
    
    useEffect(() => {
        document.querySelector('html')!.classList.remove(theme === 'light' ? 'dark' : 'light');
        document.querySelector('html')!.classList.add(theme);
    }, [ theme ]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, ToggleThemeButton }}>
            { children } 
        </ThemeContext.Provider>
    );
}