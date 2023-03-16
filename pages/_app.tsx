import { AppProps } from "next/app";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";
import { wrapper } from "../store";
import { Provider } from "react-redux";

const app: React.FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Header />
            <Component {...props.pageProps} />
            <div id="root-modal" />
        </Provider>
    );
};

export default app;
