import { actionMap } from 'interfaces';
import { ThemeProviderProps, ThemeTypes } from 'interfaces/theme';
import { createContext, Dispatch, useReducer } from 'react';

const initialValue: ThemeTypes = {
    mode: 'light',
    primary: 'rgb(29, 58, 122)',
    secondary: 'rgb(109, 183, 43)',
    background: '#fff',
    font: 'rgba(0,0,0,.65)',
    white: '#fff',
};

export enum actionThemeType {
    CHANGE_MODE = 'CHANGE_MODE',
    NEW_THEME = 'NEW_THEME',
}

type payloadTheme = {
    [actionThemeType.CHANGE_MODE]: {
        mode: 'dark' | 'light';
    };
    [actionThemeType.NEW_THEME]: ThemeTypes;
};

type actionsTheme = actionMap<payloadTheme>[keyof actionMap<payloadTheme>];

const themeReducer = (state: ThemeTypes, action: actionsTheme): ThemeTypes => {
    switch (action.type) {
        case actionThemeType.CHANGE_MODE:
            return {
                ...state,
                mode: action.payload.mode,
            };
        case actionThemeType.NEW_THEME:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return { ...state };
    }
};

export const ThemeContext = createContext<{
    state: ThemeTypes;
    dispatch: Dispatch<actionsTheme>;
}>({ state: initialValue, dispatch: () => null });

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [state, dispatch] = useReducer(themeReducer, initialValue);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
