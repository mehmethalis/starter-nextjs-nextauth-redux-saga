// Do not remove start line
import '../plugins';
import interceptors from "../utils/axiosInterceptors";
import '../styles/style.scss';
import type {AppProps} from 'next/app';
import {Provider} from "react-redux";
import store from "../redux/store";
import StoreWrapper from '../redux/StoreWrapper';
import {getSession} from "next-auth/react";


const App = ({Component, pageProps}: AppProps) => {
    return (
        <Provider store={store}>
            <StoreWrapper>
                <Component {...pageProps} />
            </StoreWrapper>
        </Provider>
    )
}
export default App
