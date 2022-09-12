import { ThemeContext, actionThemeType } from 'context/ThemeContext';
import { ThemeTypes } from 'interfaces/theme';
import { useContext } from 'react';

const useTheme = () => {
    const { state, dispatch } = useContext(ThemeContext);

    const setTheme = (newTheme: ThemeTypes) => {
        dispatch({ type: actionThemeType.NEW_THEME, payload: newTheme });
    };

    return [state, setTheme];
};

export default useTheme;
