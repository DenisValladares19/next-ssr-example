export interface ThemeTypes {
    mode: 'dark' | 'light';
    primary: string;
    secondary: string;
    background: string;
    font: string;
    white: string;
}

export interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[];
}
