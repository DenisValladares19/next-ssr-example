import App, { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import ThemeProvider from 'context/ThemeContext';

class MyApp extends App<AppProps> {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default MyApp;
