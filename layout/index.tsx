import useTheme from 'hooks/useTheme';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeTypes } from 'interfaces/theme';

interface LayoutProps {
    title?: string;
    children: JSX.Element | JSX.Element[];
}

const Layout = ({ children, title }: LayoutProps) => {
    const [theme] = useTheme();

    return (
        <WrapperLayout>
            <Global theme={theme} />
            <Header />
            <div className="content">
                <div className="main">{children}</div>
                <Footer />
            </div>
        </WrapperLayout>
    );
};

const Global = createGlobalStyle<{ theme: ThemeTypes }>`
    *, html, body {
        margin: 0;
        padding: 0;
        font-family: Montserrat, sans-serif;

        ::-webkit-scrollbar {
            width: 15px;
            height: 15px;
            box-shadow: inset 0 0 4px -1px #969696;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #e1e1e1;
        }
    }

    :root {
        ${({ theme }) => `
            --primary-color: ${theme.primary};
            --secondary-color: ${theme.secondary};
            --background-color: ${theme.background};
            --font-color: ${theme.font};
            --white-color: ${theme.white};
        `}
    }
`;

const WrapperLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: relative;

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;900&display=swap');

    .content {
        min-height: calc(100% - 100px);
        overflow-y: auto;
    }

    .main {
        min-height: calc(100% - 64px);
    }
`;

export default Layout;
